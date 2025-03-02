---
title: Moodle App Release Process
sidebar_label: Release process
sidebar_position: 8
tags:
  - Moodle App
  - Release notes
---

## Six weeks before (Code freeze)

| **#** | **Task** | **Responsibility** |
|---|---|---|
| 1. | Create an issue in the tracker for the release, like: [MOBILE-1248](https://tracker.moodle.org/browse/MOBILE-1248) | Integration Lead |
| 2. | Force an update of the [local_moodlemobileapp](https://moodle.org/plugins/view.php?id=997) plugin (as release candidate) with new strings in moodle.org/plugins (only for Moodle version 3.5). | Dev |
| 3. | Ask someone from sites or community team to review the new English strings. | Community or Sites team |
| 4. | Announce in the [moodle translation forums](https://lang.moodle.org/mod/forum/view.php?id=5) the new strings available. This will allow translators to add the new strings during the days prior to the release. | Integration Lead |
| 5. | Add the release notes in the release issue created (search for the [release_notes tag](https://tracker.moodle.org/issues/?jql=project%20%3D%20MOBILE%20AND%20labels%20%3D%20release_notes)). Ask someone from the documentation team or Martin to review the release notes. | Integration Lead |
| 6. | Contact the marketing team announcing the new release and highlights. | Integration Lead |
| 7. | Add new QA tests to the "Testing cases" document. New QA tests should be labeled with [qa_test_required](https://tracker.moodle.org/issues/?jql=project%20%3D%20MOBILE%20AND%20resolution%20in%20(Unresolved%2C%20Fixed)%20AND%20labels%20%3D%20qa_test_required%20ORDER%20BY%20priority%20DESC%2C%20updated%20DESC). Remove that label once are added to the document. | Tester |
| 8. | Run `npm audit` to ensure all the dependencies are OK and check github vulnerabilities report. | Developer |
| 9. | Complete all TODOs related with the upcoming release, which are marked in code with a comment starting with @todo [version-number] (for example, before releasing 4.1 we'd search for comments starting with @todo [4.1]) | Developer |
| 10. | Freeze Cordova plugins and JavaScript libraries versions (node modules) in the main/version branch. | Developer |
| 11. | **Start testing** | Tester |

## The release day

| **#** | **Task** | **Responsibility** |
|---|---|---|
| 1. | Fix the version name in `config.xml`, `package.json` and `moodle.config.json` (remove the `-dev`). Remember to update in config.xml the value of `AppendUserAgent` as well. | Developer |
| 2. | Set the right version number for the new Moodle LMS major release in the site.js constant `MOODLE_RELEASES`. | Developer |
| 3. | Launch the internal release github workflow. | Integration Lead |
| 4. | Do some testing with the production builds before sending the application to the stores (overall testing to see that nothing is broken because of the branch merge done in step 2): <ul><li>Correct definitive version name displayed (and commit)</li><li>AOT compiling worked</li><li>Language strings synchronised from lang.moodle.net</li><li>New language packs added</li></ul> | All the team |
| 5. | Send the applications to the stores for review. | Integration Lead |
| 6. | Check TAG/Release have been created in github ([moodlehq/moodleapp](https://github.com/moodlehq/moodleapp/releases)) with the version number. | Integration Lead |
| 7. | Mark the issue and the [version](https://tracker.moodle.org/projects/MOBILE?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page) as released in the tracker. | Integration Lead |
| 8. | Update [release notes](../../app_releases.md). | Integration Lead |

## The following days

| **#** | **Task** | **Responsibility** |
|---|---|---|
| 1. | Social media announcements (Forum and Twitter). | All the team & Marketing team |
| 2. | Post in moodle.org/news. | Team Lead |
| 3. | Review the users and developers documentation (check that everything is in order). Review the [docs_required and dev_docs_required_tags](https://tracker.moodle.org/issues/?jql=project%20%3D%20MOBILE%20AND%20labels%20in%20%28docs_required%2C%20dev_docs_required%29). Review the [Mobile features wiki documentation](https://docs.moodle.org/en/Moodle_Mobile_features). | All the team |
| 4. | Only for major versions: Create version branch from main. | Team Lead |
| 5. | Bump version numbers in the following files in the main/version branch: `config.xml` (version), `package.json` (version), `moodle.config.json` (versionname) appending a `-dev` to indicate that is a development version). Remember to update in config.xml the value of `AppendUserAgent` as well. | Integration Lead |
| 6. | Unfreeze Cordova plugins and JavaScript libraries versions (node modules). | Developer |
| 7. | Check that the [Docker image](https://cloud.docker.com/u/moodlehq/repository/docker/moodlehq/moodleapp/general) for the new version was successfully built. | Integration Lead |
| 8. | Update of the [`local_moodlemobileapp`](https://moodle.org/plugins/view.php?id=997) plugin (as final release) in moodle.org/plugins. | Developer |
| 9. | Update of the [`local_moodleappbehat`](https://github.com/moodlehq/moodle-local_moodleappbehat/) plugin (as final release) in moodle.org/plugins. | Developer |
| 10. | Update the `DEFAULT_LASTVERSION` variable with the new major release on [scripts/lang_functions.sh](https://github.com/moodlehq/moodleapp/blob/main/scripts/lang_functions.sh) | Developer |
| 11. | Set the version number for the next Moodle LMS major release in the site.js constant `MOODLE_RELEASES`. | Developer |
| 12. | Check if the Android API level should be increased or not to use a recent one. | Developer |
| 13. | Review the new features/improvements specs/shaping documents to ensure that they clearly reflect the actual implementation of the feature. | All the team |
| 14. | Review that all the minor issues found during the QA testing have a related and triaged MOBILE issue in the tracker. | All the team |

## See also

- [Moodle App Release Notes](../../app_releases.md)
