"use strict";(self.webpackChunkthink_allof_yours_github_io=self.webpackChunkthink_allof_yours_github_io||[]).push([[749],{1895:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-11-05-welcome/index.md","source":"@site/blog/2024-11-05-welcome/index.md","title":"Welcome","description":"\ub3cc\uace0 \ub3cc\uc544 Docusaurus \ube14\ub85c\uadf8\uc5d0 \uc815\ucc29\ud588\uc2b5\ub2c8\ub2e4","date":"2024-11-05T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"}],"readingTime":0.09,"hasTruncateMarker":true,"authors":[{"name":"BUNDABERG MAN","title":"Blog Owner","url":"https://github.com/ThinkAllofYours","page":{"permalink":"/blog/authors/all-bundaberg-man-articles"},"socials":{"x":"https://x.com/bundabergman","linkedin":"https://www.linkedin.com/in/bundabergman/","github":"https://github.com/bundabergman"},"imageURL":"https://github.com/ThinkAllofYours.png","key":"bundabergman"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["bundabergman"],"tags":["facebook"]},"unlisted":false,"nextItem":{"title":"\ud83d\ude80 PHP \ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud1a0\ub9c1 - 300\ubc30 \uc131\ub2a5 \uac1c\uc120 \uc0ac\ub840","permalink":"/blog/php-legacy"}},"content":"## \ub3cc\uace0 \ub3cc\uc544 Docusaurus \ube14\ub85c\uadf8\uc5d0 \uc815\ucc29\ud588\uc2b5\ub2c8\ub2e4\\n\\n\x3c!-- truncate --\x3e"},{"id":"php-legacy","metadata":{"permalink":"/blog/php-legacy","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-04-PHPLegacy.md","source":"@site/blog/2023-12-04-PHPLegacy.md","title":"\ud83d\ude80 PHP \ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud1a0\ub9c1 - 300\ubc30 \uc131\ub2a5 \uac1c\uc120 \uc0ac\ub840","description":"\ud83d\udcdd \uac1c\uc694","date":"2023-12-04T00:00:00.000Z","tags":[{"inline":true,"label":"php","permalink":"/blog/tags/php"},{"inline":true,"label":"performance","permalink":"/blog/tags/performance"},{"inline":true,"label":"refactoring","permalink":"/blog/tags/refactoring"},{"inline":true,"label":"legacy-code","permalink":"/blog/tags/legacy-code"}],"readingTime":4.565,"hasTruncateMarker":false,"authors":[{"name":"BUNDABERG MAN","title":"Blog Owner","url":"https://github.com/ThinkAllofYours","page":{"permalink":"/blog/authors/all-bundaberg-man-articles"},"socials":{"x":"https://x.com/bundabergman","linkedin":"https://www.linkedin.com/in/bundabergman/","github":"https://github.com/bundabergman"},"imageURL":"https://github.com/ThinkAllofYours.png","key":"bundabergman"}],"frontMatter":{"slug":"php-legacy","title":"\ud83d\ude80 PHP \ub808\uac70\uc2dc \ucf54\ub4dc \ub9ac\ud329\ud1a0\ub9c1 - 300\ubc30 \uc131\ub2a5 \uac1c\uc120 \uc0ac\ub840","authors":["bundabergman"],"tags":["php","performance","refactoring","legacy-code"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"## \ud83d\udcdd \uac1c\uc694\\n\\n\ub808\uac70\uc2dc PHP \uc2dc\uc2a4\ud15c\uc758 \uc131\ub2a5 \uac1c\uc120 \uc0ac\ub840\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. **300\ubd84**\uc774 \uac78\ub9ac\ub358 \ub370\uc774\ud130 \ucc98\ub9ac \uc791\uc5c5\uc744 **5\ucd08**\ub85c \ub2e8\ucd95\ud55c \ub9ac\ud329\ud1a0\ub9c1 \uacfc\uc815\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.\\n\\n## \ud83d\udd0d \ubb38\uc81c \uc0c1\ud669\\n\\n### \u274c \uae30\uc874 \uc2dc\uc2a4\ud15c\uc758 \ubb38\uc81c\uc810\\n\\n- 300\uba85\uc758 \ub370\uc774\ud130 \ucc98\ub9ac\uc5d0 \uc57d 300\ubd84 \uc18c\uc694 (1\uc778\ub2f9 1\ubd84)\\n- \uc6b4\uc601\ud300\uc758 \uc5c5\ubb34 \ud6a8\uc728\uc131 \uc800\ud558\\n- \ub370\uc774\ud130\uac00 \uc99d\uac00\ud560\uc218\ub85d \uae30\ud558\uae09\uc218\uc801\uc73c\ub85c \ucc98\ub9ac \uc2dc\uac04 \uc99d\uac00\\n\\n### \ud83e\udd14 \uc131\ub2a5 \uc800\ud558\uc758 \uc8fc\uc694 \uc6d0\uc778\\n\\n1. **\ube44\ud6a8\uc728\uc801\uc778 \ub370\uc774\ud130 \uc870\ud68c \ubc29\uc2dd**\\n\\n   ```php\\n   // \uae30\uc874: \ub2e8\uac74 \uc870\ud68c \ubc18\ubcf5\\n   for($i = 0; $i < count($list); $i++) {\\n       $sql = \\"SELECT id, member_info FROM \uace0\uac1d\ud14c\uc774\ube14 WHERE id = \'$user_id\'\\";\\n       // \ub9e4 \ubc18\ubcf5\ub9c8\ub2e4 DB \uc870\ud68c \ubc1c\uc0dd\\n       // \uace0\uac1d\uc774 \uc785\uacfc \ub418\uc5b4 \uc788\ub294 \ub370\uc774\ud130 \uc870\ud68c 1\\n       // for\ubb38 \uc548\uc5d0\uc11c \uace0\uac1d \uc815\ubcf4\uac00 \uc788\ub294 \ub610\ub2e4\ub978 \ub370\uc774\ud130 \uc870\ud68c\\n       // \uace0\uac1d \uc815\ubcf4\uac00 \uc788\ub294 \ub610\ub2e4\ub978 \ub370\uc774\ud130 \uc870\ud68c\\n\\n       // \uc774\ub7ec\ud55c \ubc29\uc2dd\uc73c\ub85c \ub370\uc774\ud130 \uc870\ud68c\uac00 \ubc18\ubcf5\ub418\uc5b4 \uc131\ub2a5 \uc800\ud558\\n   }\\n   ```\\n\\n2. **\ud2b8\ub79c\uc7ad\uc158 \uad00\ub9ac \ubbf8\ud761**\\n   - \uac74\ubcc4 \ucc98\ub9ac \ubc0f \ucee4\ubc0b\uc73c\ub85c \uc778\ud55c \uc624\ubc84\ud5e4\ub4dc\\n   - \ubd80\ubd84 \uc2e4\ud328 \uc2dc \ub370\uc774\ud130 \uc815\ud569\uc131 \ubb38\uc81c\\n\\n## \u26a1 \uac1c\uc120 \ubc29\uc548\\n\\n### 1. \ud83d\udcbe \ub370\uc774\ud130 \uc870\ud68c \ucd5c\uc801\ud654\\n\\n```php\\n// \uac1c\uc120: IN \uc808\uc744 \ud65c\uc6a9\ud55c \uc77c\uad04 \uc870\ud68c\\n$user_ids = array_column($list, \'user_id\');\\n$sql = \\"SELECT * FROM \uace0\uac1d\ud14c\uc774\ube14 WHERE id IN (\\" . implode(\',\', $user_ids) . \\")\\";\\n$result = sql_query($sql);\\n\\n// \uba54\ubaa8\ub9ac \uce90\uc2f1 \uad6c\ud604\\n$user_map = [];\\nwhile($row = sql_fetch_array($result)) {\\n    $user_map[$row[\'id\']] = $row;  // \uc0ac\uc6a9\uc790 ID\ub97c \ud0a4\ub85c \ud558\ub294 \uc5f0\uad00 \ubc30\uc5f4 \uc0dd\uc131\\n}\\n\\n// \uce90\uc2dc\ub41c \ub370\uc774\ud130 \ud65c\uc6a9 \uc608\uc2dc\\nforeach($list as $item) {\\n    $user_id = $item[\'user_id\'];\\n    if (isset($user_map[$user_id])) {\\n        $user_info = $user_map[$user_id];  // DB \uc870\ud68c \uc5c6\uc774 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc989\uc2dc \uc870\ud68c\\n        // \ucd94\uac00 \ucc98\ub9ac \ub85c\uc9c1...\\n    }\\n}\\n```\\n\\n#### \uba54\ubaa8\ub9ac \uce90\uc2f1 \ud6a8\uacfc\\n\\n- \ud83d\ude80 DB \uc870\ud68c \ud69f\uc218: 300\ud68c \u2192 1\ud68c\ub85c \uac10\uc18c\\n- \ud83d\udca1 \uc870\ud68c \uc18d\ub3c4: O(n) \u2192 O(1) \ubcf5\uc7a1\ub3c4\ub85c \uac1c\uc120\\n- \ud83d\udd04 \ub370\uc774\ud130 \uc7ac\uc0ac\uc6a9: \ub3d9\uc77c \ub370\uc774\ud130 \ubc18\ubcf5 \uc870\ud68c \uc81c\uac70\\n\\n### 2. \ud83d\udce6 Bulk Insert \uad6c\ud604\\n\\n```php\\nfunction bulk_insert($tableName, $columns, $values) {\\n    $sql = \\"INSERT INTO {$tableName} (\\" . implode(\',\', $columns) . \\") VALUES \\";\\n    $valueStrings = [];\\n    \\n    foreach($values as $row) {\\n        $valueStrings[] = \\"(\\" . implode(\',\', array_map(\'sql_escape\', $row)) . \\")\\";\\n    }\\n    \\n    $sql .= implode(\',\', $valueStrings);\\n    return sql_query($sql);\\n}\\n```\\n\\n### 3. \ud83d\udd04 \ud2b8\ub79c\uc7ad\uc158 \ucc98\ub9ac \uac1c\uc120\\n\\n```php\\nsql_begin_transaction();\\ntry {\\n    // \ub370\uc774\ud130 \uac80\uc99d\\n    $validated_data = processValidate($input_data);\\n    \\n    // Bulk Insert \uc2e4\ud589\\n    bulk_insert(\'score_table\', $columns, $validated_data);\\n    bulk_insert(\'history_table\', $columns, $validated_data);\\n    \\n    sql_commit();\\n} catch (Exception $e) {\\n    sql_rollback();\\n    log_error($e->getMessage());\\n    return [\'success\' => false, \'message\' => \'\ucc98\ub9ac \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\'];\\n}\\n```\\n\\n## \ud83d\udcca \uac1c\uc120 \uacb0\uacfc\\n\\n| \uad6c\ubd84 | \ucc98\ub9ac \uc2dc\uac04 | \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 | DB \ubd80\ud558 |\\n|-----|---------|------------|---------|\\n| \uac1c\uc120 \uc804 | 300\ubd84 | \ub192\uc74c | \ub192\uc74c |\\n| \uac1c\uc120 \ud6c4 | 5\ucd08 | \ucd5c\uc801\ud654 | \ub0ae\uc74c |\\n\\n### \u2728 \uc8fc\uc694 \uac1c\uc120 \ud3ec\uc778\ud2b8\\n\\n1. **\ud83d\udd0b \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud638\ucd9c \ucd5c\uc18c\ud654**\\n   - 300 * 10\ud68c \u2192 10\ud68c\ub85c \uac10\uc18c\\n   - \uba54\ubaa8\ub9ac \uce90\uc2f1 \ud65c\uc6a9\\n\\n2. **\u26a1 \uc77c\uad04 \ucc98\ub9ac \ub3c4\uc785**\\n   - Bulk Insert\ub85c Insert \ucffc\ub9ac \ucd5c\uc18c\ud654\\n   - \ud2b8\ub79c\uc7ad\uc158 \ub2e8\uc704 \ucd5c\uc801\ud654\\n\\n3. **\ud83d\udcc8 \ucf54\ub4dc \ud488\uc9c8 \ud5a5\uc0c1**\\n   - \ubaa8\ub4c8\ud654 \ubc0f \ud568\uc218 \ubd84\ub9ac\\n   - \uc5d0\ub7ec \ucc98\ub9ac \uac15\ud654\\n   - \ub370\uc774\ud130 \uac80\uc99d \ub85c\uc9c1 \uccb4\uacc4\ud654\\n\\n## \ud83d\udcab \ub9c8\uce58\uba70\\n\\n> \uc774\ubc88 \ub9ac\ud329\ud1a0\ub9c1\uc744 \ud1b5\ud574 \uc5bb\uc740 \uad50\ud6c8:\\n\\n- \ud83c\udfaf \ub808\uac70\uc2dc \ucf54\ub4dc\ub3c4 \uc801\uc808\ud55c \ub9ac\ud329\ud1a0\ub9c1\uc73c\ub85c \ud070 \uc131\ub2a5 \uac1c\uc120\uc774 \uac00\ub2a5\\n- \ud83d\udca1 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc791\uc5c5 \ucd5c\uc801\ud654\uc758 \uc911\uc694\uc131\\n- \ud83c\udfd7\ufe0f \uccb4\uacc4\uc801\uc778 \ucf54\ub4dc \uad6c\uc870\uc758 \ud544\uc694\uc131\\n\\n\uc55e\uc73c\ub85c\ub3c4 \uc9c0\uc18d\uc801\uc778 \ucf54\ub4dc \uac1c\uc120\uacfc \ud559\uc2b5\uc744 \ud1b5\ud574 \ub354 \ub098\uc740 \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4e4\uc5b4\uac00\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\nLegacy..Legacy..Legacy.. \ub0b4\uac00 \ub9cc\ub4e4\ub550 \uc9c4\uc9dc \uc774\ub7f0 \ubb38\uc81c\uac00 \uc548\uc0dd\uae30\ub3c4\ub85d \ub178\ub825\ud574\uc57c \ud560 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n:::tip \ud83d\udca1 \ucc38\uace0\\n\uc2e4\uc81c \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc5d0\uc11c \uac80\uc99d\ub41c \uc0ac\ub840\uc785\ub2c8\ub2e4. \uc720\uc0ac\ud55c \uc131\ub2a5 \uc774\uc288\uac00 \uc788\ub2e4\uba74 \uc774\ub7ec\ud55c \uc811\uadfc \ubc29\uc2dd\uc744 \uace0\ub824\ud574\ubcf4\uc138\uc694.\\n:::"}]}}')}}]);