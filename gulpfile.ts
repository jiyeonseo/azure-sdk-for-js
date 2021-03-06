/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as glob from "glob";
import * as gulp from "gulp";
import * as path from "path";
import { argv } from "yargs";
import { findAzureRestApiSpecsRepository, findSdkDirectory, findMissingSdks, copyExistingNodeJsReadme, updateTypeScriptReadmeFile, saveContentToFile } from "./.scripts/generate-sdks";

const azureSDKForJSRepoRoot: string = __dirname;
const azureRestAPISpecsRoot: string = argv['azure-rest-api-specs-root'] || path.resolve(azureSDKForJSRepoRoot, '..', 'azure-rest-api-specs');
const packageArg: string = argv['package'];
const use: string = argv['use'];
const whatif: boolean = argv['whatif'];
const useDebugger: boolean = argv["debugger"];

function findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot: string): string[] {
  // console.log(`Looking for "readme.typescript.md" files in "${azureRestAPISpecsRoot}"...`);
  const specificationFolderPath: string = path.resolve(azureRestAPISpecsRoot, 'specification');
  const readmeTypeScriptMdFilePaths: string[] = glob.sync('**/readme.typescript.md', { absolute: true, cwd: specificationFolderPath });
  if (readmeTypeScriptMdFilePaths) {
    for (let i = 0; i < readmeTypeScriptMdFilePaths.length; ++i) {
      const readmeTypeScriptMdFilePath: string = readmeTypeScriptMdFilePaths[i];
      // console.log(`  Found "${readmeTypeScriptMdFilePath}".`);
      if (readmeTypeScriptMdFilePath && !startsWith(readmeTypeScriptMdFilePath, specificationFolderPath)) {
        const resolvedReadmeTypeScriptMdFilePath: string = path.resolve(specificationFolderPath, readmeTypeScriptMdFilePath);
        // console.log(`    Updating to "${resolvedReadmeTypeScriptMdFilePath}".`);
        readmeTypeScriptMdFilePaths[i] = resolvedReadmeTypeScriptMdFilePath;
      }
    }
  }
  return readmeTypeScriptMdFilePaths;
}

function getPackageNamesFromReadmeTypeScriptMdFileContents(readmeTypeScriptMdFileContents: string): string[] {
  const packageNamePattern: RegExp = /package-name: (\S*)/g;
  const matches: string[] = readmeTypeScriptMdFileContents.match(packageNamePattern) || [];
  // console.log(`"package-name" matches: ${JSON.stringify(matches)}`);
  for (let i = 0; i < matches.length; ++i) {
    matches[i] = matches[i].substring("package-name: ".length);
  }
  // console.log(`"package-name" matches trimmed: ${JSON.stringify(matches)}`);
  return matches;
}

function getOutputFolderFromReadmeTypeScriptMdFileContents(readmeTypeScriptMdFileContents: string): string {
  return readmeTypeScriptMdFileContents.match(/output-folder: (\S*)/)[1];
}

function execute(command: string, packageFolderPath: string): void {
  if (!fs.existsSync(packageFolderPath)) {
    log(packageFolderPath, "Folder not found.");
  } else {
    execSync(command, { cwd: packageFolderPath, stdio: "inherit" });
  }
}

function npmRunBuild(packageFolderPath: string): void {
  execute("npm run build", packageFolderPath);
}

function npmInstall(packageFolderPath: string): void {
  execute("npm install", packageFolderPath);
}

function getAbsolutePackageFolderPathFromReadmeFileContents(typeScriptReadmeFileContents: string): string {
  const outputFolderPath: string = getOutputFolderFromReadmeTypeScriptMdFileContents(typeScriptReadmeFileContents);
  const outputFolderPathRelativeToAzureSDKForJSRepoRoot: string = outputFolderPath.substring('$(typescript-sdks-folder)/'.length);
  return path.resolve(azureSDKForJSRepoRoot, outputFolderPathRelativeToAzureSDKForJSRepoRoot);
}

function startsWith(value: string, prefix: string): boolean {
  return value && prefix && value.indexOf(prefix) === 0;
}

function endsWith(value: string, suffix: string): boolean {
  return value && suffix && value.length >= suffix.length && value.lastIndexOf(suffix) === value.length - suffix.length;
}

function contains(values: string[], searchString: string): boolean {
  return values.indexOf(searchString) !== -1;
}

function getPackgeFolderPathFromPackageArgument(packageArgument: string | undefined): string | undefined {
  let packageFolderPath: string | undefined;

  if (!packageArg) {
    console.log(`No --package specified.`);
  } else {
    const typeScriptReadmeFilePaths: string[] = findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot);

    let foundPackage = false;

    for (let i = 0; i < typeScriptReadmeFilePaths.length; ++i) {
      const typeScriptReadmeFilePath: string = typeScriptReadmeFilePaths[i];

      const typeScriptReadmeFileContents: string = fs.readFileSync(typeScriptReadmeFilePath, 'utf8');
      const packageNames: string[] = getPackageNamesFromReadmeTypeScriptMdFileContents(typeScriptReadmeFileContents);

      if (contains(packageNames, packageArg)) {
        foundPackage = true;

        packageFolderPath = getAbsolutePackageFolderPathFromReadmeFileContents(typeScriptReadmeFileContents);
      }
    }

    if (!foundPackage) {
      console.log(`No package found with the name "${packageArg}".`);
    }
  }

  return packageFolderPath;
}

function log(path: string, message: string): void {
  console.log(`[${path}]> ${message}`);
}

gulp.task('default', () => {
  console.log('gulp build --package <package-name>');
  console.log('  --package');
  console.log('    NPM package to run "npm run build" on.');
  console.log();
  console.log('gulp install --package <package name>');
  console.log('  --package');
  console.log('    NPM package to run "npm install" on.');
  console.log();
  console.log('gulp codegen [--azure-rest-api-specs-root <azure-rest-api-specs root>] [--use <autorest.typescript root>] [--package <package name>]');
  console.log('  --azure-rest-api-specs-root');
  console.log('    Root location of the local clone of the azure-rest-api-specs-root repository.');
  console.log('  --use');
  console.log('    Root location of autorest.typescript repository. If this is not specified, then the latest installed generator for TypeScript will be used.');
  console.log('  --package');
  console.log('    NPM package to regenerate. If no package is specified, then all packages will be regenerated.');
  console.log();
  console.log('gulp publish [--package <package name>] [--whatif]');
  console.log('  --package');
  console.log('    The name of the package to publish. If no package is specified, then all packages will be published.');
  console.log('  --whatif');
  console.log('    Don\'t actually publish packages, but just indicate which packages would be published.');
});

gulp.task("install", () => {
  const packageFolderPath: string | undefined = getPackgeFolderPathFromPackageArgument(packageArg);
  if (packageFolderPath) {
    log(packageFolderPath, "npm install");
    npmInstall(packageFolderPath);
  }
});

gulp.task("build", () => {
  const packageFolderPath: string | undefined = getPackgeFolderPathFromPackageArgument(packageArg);
  if (packageFolderPath) {
    log(packageFolderPath, "npm run build");
    npmRunBuild(packageFolderPath);
  }
});

function containsPackageName(packageNames: string[], packageName: string): boolean {
  return contains(packageNames, packageName) ||
    contains(packageNames, `@azure/${packageName}`) ||
    contains(packageNames, `"${packageName}"`) ||
    contains(packageNames, `"@azure/${packageName}"`) ||
    contains(packageNames, `'${packageName}'`) ||
    contains(packageNames, `'@azure/${packageName}'`);
}

// This task is used to generate libraries based on the mappings specified above.
gulp.task('codegen', () => {
  const typeScriptReadmeFilePaths: string[] = findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot);

  for (let i = 0; i < typeScriptReadmeFilePaths.length; ++i) {
    const typeScriptReadmeFilePath: string = typeScriptReadmeFilePaths[i];

    const typeScriptReadmeFileContents: string = fs.readFileSync(typeScriptReadmeFilePath, 'utf8');
    const packageNames: string[] = getPackageNamesFromReadmeTypeScriptMdFileContents(typeScriptReadmeFileContents);
    const packageNamesString: string = JSON.stringify(packageNames);
    // console.log(`In "${typeScriptReadmeFilePath}", found package names "${packageNamesString}".`);

    if (!packageArg || containsPackageName(packageNames, packageArg)) {
      console.log(`>>>>>>>>>>>>>>>>>>> Start: "${packageNamesString}" >>>>>>>>>>>>>>>>>>>>>>>>>`);

      const readmeFilePath: string = path.resolve(path.dirname(typeScriptReadmeFilePath), 'readme.md');

      let cmd = `autorest --typescript --typescript-sdks-folder=${azureSDKForJSRepoRoot} --license-header=MICROSOFT_MIT_NO_VERSION ${readmeFilePath}`;
      if (use) {
        cmd += ` --use=${use}`;
      }
      else {
        const localAutorestTypeScriptFolderPath = path.resolve(azureSDKForJSRepoRoot, '..', 'autorest.typescript');
        if (fs.existsSync(localAutorestTypeScriptFolderPath) && fs.lstatSync(localAutorestTypeScriptFolderPath).isDirectory()) {
          cmd += ` --use=${localAutorestTypeScriptFolderPath}`;
        }
      }

      if (useDebugger) {
        cmd += ` --typescript.debugger`;
      }

      try {
        console.log('Executing command:');
        console.log('------------------------------------------------------------');
        console.log(cmd);
        console.log('------------------------------------------------------------');

        execSync(cmd, { encoding: "utf8", stdio: "inherit" });

        console.log('Installing dependencies...');
        const packageFolderPath: string = getAbsolutePackageFolderPathFromReadmeFileContents(typeScriptReadmeFileContents);
        npmInstall(packageFolderPath);
      } catch (err) {
        console.log('Error:');
        console.log(`An error occurred while generating client for packages: "${packageNamesString}":\n Stderr: "${err.stderr}"`);
      }

      console.log(`>>>>>>>>>>>>>>>>>>> End: "${packageNamesString}" >>>>>>>>>>>>>>>>>>>>>>>>>`);
      console.log();
    }
  }
});

gulp.task('publish', () => {
  const typeScriptReadmeFilePaths: string[] = findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot);

  let errorPackages = 0;
  let upToDatePackages = 0;
  let publishedPackages = 0;
  let publishedPackagesSkipped = 0;

  for (let i = 0; i < typeScriptReadmeFilePaths.length; ++i) {
    const typeScriptReadmeFilePath: string = typeScriptReadmeFilePaths[i];
    // console.log(`INFO: Processing ${typeScriptReadmeFilePath}`);

    const typeScriptReadmeFileContents: string = fs.readFileSync(typeScriptReadmeFilePath, 'utf8');
    const packageFolderPath: string = getAbsolutePackageFolderPathFromReadmeFileContents(typeScriptReadmeFileContents);
    if (!fs.existsSync(packageFolderPath)) {
      console.log(`ERROR: Package folder ${packageFolderPath} has not been generated.`);
      errorPackages++;
    }
    else {
      const packageJsonFilePath: string = `${packageFolderPath}/package.json`;
      if (!fs.existsSync(packageJsonFilePath)) {
        console.log(`ERROR: Package folder ${packageFolderPath} is missing its package.json file.`);
        errorPackages++;
      }
      else {
        const packageJson: { [propertyName: string]: any } = require(packageJsonFilePath);
        const packageName: string = packageJson.name;

        if (!packageArg || packageArg === packageName || endsWith(packageName, `-${packageArg}`)) {
          const localPackageVersion: string = packageJson.version;
          if (!localPackageVersion) {
            console.log(`ERROR: "${packageJsonFilePath}" doesn't have a version specified.`);
            errorPackages++;
          }
          else {
            let npmPackageVersion: string;
            try {
              const npmViewResult: { [propertyName: string]: any } = JSON.parse(execSync(`npm view ${packageName} --json`, { stdio: ['pipe', 'pipe', 'ignore'] }).toString());
              npmPackageVersion = npmViewResult['dist-tags']['latest'];
            }
            catch (error) {
              // This happens if the package doesn't exist in NPM.
            }

            if (localPackageVersion === npmPackageVersion) {
              upToDatePackages++;
            }
            else {
              console.log(`Publishing package "${packageName}" with version "${localPackageVersion}"...${whatif ? " (SKIPPED)" : ""}`);
              if (!whatif) {
                try {
                  npmInstall(packageFolderPath);
                  execSync(`npm publish`, { cwd: packageFolderPath });
                  publishedPackages++;
                }
                catch (error) {
                  errorPackages++;
                }
              } else {
                publishedPackagesSkipped++;
              }
            }
          }
        }
      }
    }
  }

  console.log();
  console.log(`Error packages:             ${errorPackages}`);
  console.log(`Up to date packages:        ${upToDatePackages}`);
  console.log(`Published packages:         ${publishedPackages}`);
  console.log(`Published packages skipped: ${publishedPackagesSkipped}`);
});

gulp.task("find-missing-sdks", async () => {
  try {
    console.log(`Passed arguments: ${process.argv}`);

    const azureRestApiSpecsRepository = await findAzureRestApiSpecsRepository();
    console.log(`Found azure-rest-api-specs repository in ${azureRestApiSpecsRepository}`);

    await findMissingSdks(azureRestApiSpecsRepository);
  } catch (error) {
    console.error(error);
  }
});

gulp.task("generate-ts-readme", async () => {
  try {
    console.log(`Passed arguments: ${process.argv}`);

    const azureRestApiSpecsRepository: string = await findAzureRestApiSpecsRepository();
    console.log(`Found azure-rest-api-specs repository in ${azureRestApiSpecsRepository}`);

    const sdkPath: string = await findSdkDirectory(azureRestApiSpecsRepository);
    console.log(`Found specification in ${sdkPath}`);

    const typescriptReadmePath: string = await copyExistingNodeJsReadme(sdkPath);
    console.log(`Copied readme file successfully`);

    const newContent: string = await updateTypeScriptReadmeFile(typescriptReadmePath);
    console.log(`Generated content of the new readme file successfully`);

    await saveContentToFile(typescriptReadmePath, newContent);
    console.log(`Content saved successfully to ${typescriptReadmePath}`);
  }
  catch (error) {
    console.error(error);
  }
});
