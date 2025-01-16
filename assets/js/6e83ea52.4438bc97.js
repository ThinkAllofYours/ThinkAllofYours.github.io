"use strict";(self.webpackChunkthink_allof_yours_github_io=self.webpackChunkthink_allof_yours_github_io||[]).push([[7488],{8671:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"algorithm/possible_bipartition","title":"\ud83d\ude80 886. Possible Bipartition","description":"Possible Bipartition - LeetCode","source":"@site/docs/algorithm/886_possible_bipartition.mdx","sourceDirName":"algorithm","slug":"/algorithm/886_possible_bipartition","permalink":"/docs/algorithm/886_possible_bipartition","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/algorithm/886_possible_bipartition.mdx","tags":[{"inline":true,"label":"algorithm","permalink":"/docs/tags/algorithm"},{"inline":true,"label":"graph","permalink":"/docs/tags/graph"}],"version":"current","sidebarPosition":886,"frontMatter":{"slug":"886_possible_bipartition","title":"\ud83d\ude80 886. Possible Bipartition","authors":["bundabergman"],"tags":["algorithm","graph"]},"sidebar":"docsSidebar","previous":{"title":"\ud83d\ude80 692. Top K Frequent Words","permalink":"/docs/algorithm/692_top_k_frequent"},"next":{"title":"\ud83d\ude80 944. Delete Columns to Make Sorted","permalink":"/docs/algorithm/944_delete_columns_to_make_sorted"}}');var l=e(4848),r=e(8453);const o={slug:"886_possible_bipartition",title:"\ud83d\ude80 886. Possible Bipartition",authors:["bundabergman"],tags:["algorithm","graph"]},t=void 0,d={},c=[];function p(i){const n={a:"a",code:"code",del:"del",em:"em",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/possible-bipartition/",children:"Possible Bipartition - LeetCode"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]\nOutput: true\nExplanation: group1 [1,4] and group2 [2,3].\n"})}),"\n",(0,l.jsx)(n.p,{children:"\ubb38\uc81c\ub97c \ubcf4\uba74 \ub9ac\uc2a4\ud2b8\uac00 \uc8fc\uc5b4\uc9c0\uace0 \ud568\uaed8 \uc788\uc744 \uc218 \uc5c6\ub294 \uc22b\uc790\ub4e4\uc774 2\ucc28\uc6d0 \ubc30\uc5f4\ub85c \uc8fc\uc5b4\uc9c4\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"1\uc740 2\uc640 3\uacfc \ud568\uaed8 \ud560 \uc218 \uc5c6\uace0"}),"\n",(0,l.jsx)(n.p,{children:"2\ub294 1\uacfc 4\uc640 \ud568\uaed8 \uc788\uc744 \uc218 \uc5c6\ub2e4"}),"\n",(0,l.jsx)(n.p,{children:"\uc8fc\uc5b4\uc9c0\ub294 n\uac1c\uc758 \uc218\ub97c \uc704\uc5d0 \uc8fc\uc5b4\uc9c0\ub294 \ub9ac\uc2a4\ud2b8\uc5d0 \ucc38\uace0\ud574\uc11c \ub450 \uadf8\ub8f9\uc73c\ub85c \ub098\ub220\uc57c \ud55c\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"\ub9cc\uc57d\uc5d0 \ub450\uadf8\ub8f9\uc73c\ub85c \ub098\ub220\uc5b4\uc9c0\uba74 True \ub098\ub204\uc9c0 \ubabb\ud558\uba74 False\uc774\ub2e4."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"\u2192 \ud574\uacb0\ubc29\ubc95\uc744 \ucc98\uc74c \uc0dd\uac01\ud574\ubcf4\uba74"}),"\n",(0,l.jsx)(n.p,{children:"\uc77c\ub2e8 \uac01 \uc22b\uc790\ub4e4\uc774 \uc5b4\ub5a4 \uc22b\uc790\uc640 \ud568\uaed8 \ud560 \uc218 \uc5c6\ub294\uc9c0\ub97c \ub515\uc154\ub108\ub9ac \uc790\ub8cc\uad6c\uc870\ub97c \uc774\uc6a9\ud574\uc11c \uc815\ub9ac\ud588\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"\uc774\uc81c \uc774\uac78 \ubc30\uce58\ud574\uc57c \ud558\ub294\ub370 dictionary\uc5d0\uc11c for\ubb38\uc744 \ub3cc\uba74\uc11c \uc911\ubcf5\ub418\ub294\uac8c \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud588\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from typing import List\n\nclass Solution:\n    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:\n        dislike_dic = {}\n        for dislike in dislikes:\n            item1 = dislike[0]\n            item2 = dislike[1]\n            if item1 in dislike_dic:\n                dislike_dic[item1].append(item2)\n            else:\n                dislike_dic[item1] = [item2]\n\n            if item2 in dislike_dic:\n                dislike_dic[item2].append(item1)\n            else:\n                dislike_dic[item2] = [item1]\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Code(\uc798\ubabb\ub41c \ucf54\ub4dc\uc784)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"\t\t\t\t\n\t\t\t\tgroup1 = set()\n        group2 = set()\n        for i in range(1, n + 1):\n            group_name = None\n            lst_dislike = []\n            if i in dislike_dic:\n                lst_dislike = dislike_dic[i]\n            group_name = ''\n            for dislike in lst_dislike:\n                if dislike in group1:\n                    if dislike in group2:\n                        return False\n                    if group_name == '':\n                        group_name = 'group2'\n                    elif group_name != 'group2':\n                        # could this element be in group2?\n                        if not self.could_be_in_another_group(dislike_dic, dislike, group2, group1):\n                            return False\n                        group_name = 'group2'\n                elif dislike in group2:\n                    if dislike in group1:\n                        return False\n                    if group_name == '':\n                        group_name = 'group1'\n                    elif group_name != 'group1':\n                        if not self.could_be_in_another_group(dislike_dic, dislike, group1, group2):\n                            return False\n                        group_name = 'group1'\n            if group_name == '' or group_name == 'group1':\n                group1.add(i)\n            else:\n                group2.add(i)\n        return True\n\n    def could_be_in_another_group(self, dislike_dic, dislike, from_group, to_group):\n        if dislike in dislike_dic:\n            lst_dislike = dislike_dic[dislike]\n            for dislike2 in lst_dislike:\n                if dislike2 in from_group:\n                    if self.could_be_in_another_group(dislike_dic, dislike2, from_group, to_group):\n                        from_group.remove(dislike2)\n                        to_group.add(dislike2)\n                    else:\n                        return False\n        return True\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\ubcf4\uba74 \uc54c\uaca0\uc9c0\ub9cc \ubcc4 \ub09c\ub9ac\ub97c \ub2e4 \ubd80\ub838\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"\ucf54\ub4dc\uac00 \ub108\ubb34 \uc9c0\uc800\ubd84\ud574\uc11c \ub9ac\ud399\ud1a0\ub9c1 \ud558\ub2e4\uac00"}),"\n",(0,l.jsx)(n.p,{children:"Chat GPT\uc5d0\uac8c \ub9ac\ud329\ud1a0\ub9c1\uc744 \ubd80\ud0c1\ud574 \ubcf4\uc558\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Code(\uc798\ubabb\ub41c \ucf54\ub4dc \ub9ac\ud329\ud1a0\ub9c1)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"\t\t\tgroups = [set(), set()]\n        for i in range(1, n + 1):\n            group_name = None\n            lst_dislike = dislike_dic.get(i, [])\n            group_name = ''\n            for dislike in lst_dislike:\n                group_index = None\n                if dislike in groups[0]:\n                    group_index = 0\n                elif dislike in groups[1]:\n                    group_index = 1\n                if group_index is not None:\n                    if group_name == '':\n                        group_name = group_index\n                    elif group_name != group_index:\n                        if not self.could_be_in_another_group(dislike_dic, dislike, groups[group_index], groups[group_index ^ 1]):\n                            return False\n                        group_name = group_index\n            if group_name == '':\n                groups[0].add(i)\n            elif group_name == 0:\n                groups[0].add(i)\n            else:\n                groups[1].add(i)\n        return True\n\n    def could_be_in_another_group(self, dislike_dic, dislike, from_group, to_group):\n        if dislike in dislike_dic:\n            lst_dislike = dislike_dic[dislike]\n            for dislike2 in lst_dislike:\n                if dislike2 in from_group:\n                    if self.could_be_in_another_group(dislike_dic, dislike2, from_group, to_group):\n                        from_group.remove(dislike2)\n                        to_group.add(dislike2)\n                    else:\n                        return False\n        return True\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:(0,l.jsx)(n.strong,{children:"\uc624~~~ \uc798\ud55c\ub2e4 \uc798\ud574"})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\uacb0\ub860\uc740 ? \ud574\uacb0\uc548\ub428"})}),"\n",(0,l.jsx)(n.p,{children:"\ubb38\uc81c\ub294 dictionary\uc5d0\uc11c for\ubb38\uc744 \ub3cc\ub2e4\uac00 \uc694\uc18c \ud558\ub098\uac00 10\uc774\ub77c\uace0 \ud588\uc744\ub54c \uc591\ucabd \uadf8\ub8f9\uc5d0 \ub2e4\ub4e4\uc5b4\uac08 \uc218 \uc788\ub294 \uacbd\uc6b0\uc5d0"}),"\n",(0,l.jsx)(n.p,{children:"\uc77c\ub2e8 \ud558\ub098\uc758 \uadf8\ub8f9\uc5d0 \ub123\uc5b4\ub450\uba74 \ub4a4\uc5d0 22\ucbe4 \uc654\uc744\ub54c \uc77c\ub2e8 \ud558\ub098\uc758 \uadf8\ub8f9\uc5d0 \ub123\uc5b4\ub454 10\uc774 \ubb38\uc81c\uac00 \ub418\uace0"}),"\n",(0,l.jsx)(n.p,{children:"\uadf8\ub7fc 10\uc744 \ub2e4\uc2dc \ud655\uc778\ud574\uc11c \ub2e4\ub978 \uadf8\ub8f9\uc5d0 \ub123\uc5b4\uc57c \ud558\ub294\ub370 \ub123\ub294\ub2e4\uace0 \ub2e4\uac00 \uc544\ub2c8\ub77c 1~22\ubc88\uae4c\uc9c0 \ub2e4\uc2dc \ud655\uc778\ud574\uc57c \ud558\ub294 \ubb38\uc81c\uac00 \uc0dd\uacbc\ub2e4."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.del,{children:(0,l.jsx)(n.strong,{children:"\ubabb\ud480\uc5c8\ub2e4 GG"})})," \ud83d\ude2d"]}),"\n",(0,l.jsx)(n.p,{children:"ai\uc5d0\uac8c \ubb3c\uc5b4\ubcf4\ub2c8 \ub2f5\uc744 \uc54c\ub824\uc8fc\ub294\ub370 \ud2b9\uc815 \uc54c\uace0\ub9ac\uc998\uc774 \uc788\ub2e8\ub2e4\u2026"}),"\n",(0,l.jsx)(n.p,{children:"\uc774\ub7f0 \ud2b9\uc815 \uc54c\uace0\ub9ac\uc998\uc744 \uacf5\ubd80\ud574\uc57c \ud558\ub294\uac00???"}),"\n",(0,l.jsx)(n.p,{children:"\uadf8\ub7fc \uc774\uac74 \uc880 \uc81c\uc678\ud558\uace0"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"\ub2e4\uc2dc \ucc98\uc74c\ubd80\ud130 \uc0dd\uac01\ud558\uae30\ub85c\u2026"}),"\n",(0,l.jsx)(n.p,{children:"(\uc774\ubc88 \ubb38\uc81c\ub294 \uc5b4\ub835\ub2e4 \u3160.\u3160)"}),"\n",(0,l.jsx)(n.p,{children:"\uc778\uc218\uac00 \uc774\ub807\uac8c \uc8fc\uc5b4\uc84c\uc744 \ub54c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:" Input: n = 4, dislikes = [[1,2],[1,3],[2,4]] \n"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\uac01 \uc218\ubcc4\ub85c \uc5b4\ub5a4\uc218\uc640 \ud568\uaed8 \ud560 \uc218 \uc5c6\ub294\uc9c0 \ud655\uc778"}),"\n",(0,l.jsx)(n.li,{children:"\uac01 \uadf8\ub8f9\ubcc4\ub85c 1\uacfc \ud568\uaed8 \ud560 \uc218 \uc5c6\ub294 \uc218\uac00 \uc788\ub294\uc9c0 \uba3c\uc800 \uac80\uc0ac"}),"\n",(0,l.jsx)(n.li,{children:"\ud604\uc7ac group1 = [ ] group2 = [ ]"}),"\n",(0,l.jsx)(n.li,{children:"\ub458\ub2e4 \uac00\ub2a5\ud558\ub2e4\uba74 group1 = [ 1 ]"}),"\n",(0,l.jsx)(n.li,{children:"\ub2e4\ub978 \uadf8\ub8f9\uc5d0 1\uacfc \ud568\uaed8 \ud560 \uc218 \uc5c6\ub294 \uc218\uc778 2, 3\uc744 \ubc18\ub4dc\uc2dc \ub123\uc5b4\uc57c\ud568"}),"\n",(0,l.jsx)(n.li,{children:"2\uc640 3\uc774 \ud568\uaed8 \ud560 \uc218 \uc788\ub294\uc9c0 \uac80\uc0ac"}),"\n",(0,l.jsx)(n.li,{children:"2\uc640 \ud568\uaed8 \ud560 \uc218 \uc5c6\ub294 \ub9ac\uc2a4\ud2b8 \uad6c\ud558\uae30"}),"\n",(0,l.jsx)(n.li,{children:"3\uacfc \ud568\uaed8 \ud560 \uc218 \uc5c6\ub294 \ub9ac\uc2a4\ud2b8 \uad6c\ud558\uae30"}),"\n",(0,l.jsx)(n.li,{children:"\uac01 \ub9ac\uc2a4\ud2b8\ub4e4 \ud558\ub098\ub85c \ud569\uce58\uae30"}),"\n",(0,l.jsxs)(n.li,{children:["2\uc640 3\uc774 \ud569\uccd0\uc9c4 \ub9ac\uc2a4\ud2b8 \uc548\uc5d0 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uae30","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\uac00\ub2a5\ud558\ub2e4\uba74 2\uc640 3\uc740 \ud55c\ubc88\uc5d0 group2\uc5d0 \ub4e4\uc5b4\uac04\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"2\uc640 3\uc774 \ud569\uccd0\uc9c4 \ub9ac\uc2a4\ud2b8 \uc548\uc5d0 \uc788\ub2e4\uba74 return False"}),"\n",(0,l.jsx)(n.li,{children:"\ubaa8\ub4e0 for\ubb38\uc774 \ub2e4 \ub3cc\uc544\uac00\uba74 \uc790\ub3d9\uc73c\ub85c return True"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uacb0\uacfc\ub294 \uae30\uc874\ubcf4\ub2e4 \ubabb\ud55c \uacb0\uacfc\uac00\u2026.\uc754 \ub610 \ud2c0\ub9bc"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\ucf54\ub4dc"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from typing import List\n\nclass Solution:\n    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:\n        dislike_dic = {}\n        for dislike in dislikes:\n            item1 = dislike[0]\n            item2 = dislike[1]\n            if item1 in dislike_dic:\n                dislike_dic[item1].append(item2)\n            else:\n                dislike_dic[item1] = [item2]\n\n            if item2 in dislike_dic:\n                dislike_dic[item2].append(item1)\n            else:\n                dislike_dic[item2] = [item1]\n\n        groups = [[], []]\n        joined_element = set()\n        for key in dislike_dic:\n            if key in joined_element:\n                continue\n            else:\n                joined_element.add(key)\n            lst_dislike = dislike_dic.get(key, [])\n            merge_set = set()\n            for dislike in lst_dislike:\n                items = dislike_dic.get(dislike, [])\n                for item in items:\n                    merge_set.add(item)\n            # \uc790\uae30\uc790\uc2e0\ubd80\ud130 \uba3c\uc800 \uac80\uc0ac\n            # dislike\ub4e4\uc774 \ud568\uaed8 \ud560 \uc218 \uc788\ub294\uc9c0 \ubd80\ud130 \uac80\uc0ac\ud568\n            for item in lst_dislike:\n                if item in merge_set:\n                    return False\n                joined_element.add(item)\n            # \ub9cc\uc57d \ud568\uaed8 \ud560 \uc218 \uc788\ub2e4\uba74 \uc5b4\ub290 \uadf8\ub8f9\uc73c\ub85c \uac00\uc57c\ud560\uc9c0 \uac80\uc0ac\n            idx_group = 0\n            for item in groups[0]:\n                if item in merge_set:\n                    idx_group = 1\n                    break\n            for item in groups[1]:\n                if item in merge_set and idx_group == 1:\n                    return False\n            groups[idx_group].append(key)\n            # \uc0c1\ub300\ubc29\ucabd\uc5d0 \uc788\ub294 \uac83\ub4e4\uc740 \uc81c\uc678\ud55c\ub2e4.\n            for dislike in lst_dislike:\n                if dislike not in groups[idx_group]:\n                    groups[idx_group ^ 1].append(dislike)\n        return True\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"\uba87\uc77c\uc744 \uc9ec\uc9ec\uc774 \uc0dd\uac01\ub0a0\ub54c\ub9c8\ub2e4 \uace0\ubbfc\ud574\ubd24\ub294\ub370 \uacb0\uad6d Recursive\ub97c \uc0ac\uc6a9\ud574\uc57c \ud480 \uc218 \uc788\uc744 \uac83 \uac19\uc558\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"\uacb0\uad6d \uc624\ub298\ub3c4 \uc2e4\ud328\ud558\uace0\u2026 \uc754"}),"\n",(0,l.jsx)(n.p,{children:"\uc54c\uace0\ub9ac\uc998\uc758 \ub3c4\uc6c0\uc744 \uc880 \ubc1b\uc558\ub2e4. \u3160.\u3160"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from typing import List\n\nclass Solution:\n    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:\n        dislike_dic = {}\n        for dislike in dislikes:\n            item1 = dislike[0]\n            item2 = dislike[1]\n            if item1 in dislike_dic:\n                dislike_dic[item1].append(item2)\n            else:\n                dislike_dic[item1] = [item2]\n\n            if item2 in dislike_dic:\n                dislike_dic[item2].append(item1)\n            else:\n                dislike_dic[item2] = [item1]\n\n        groups = {}\n        for n in range(1, n+1):\n            color = groups.get(n, -1)\n            if color == -1:\n                groups[n] = 0\n                if not self.coloring(groups, dislike_dic, n, 0):\n                    return False\n        return True\n    \n    def coloring(self, groups: dict, dislike_dic: dict, n: int, color: int):\n        coloring = color ^ 1\n        lst_dislike = dislike_dic.get(n, [])\n        for i in lst_dislike:\n            i_color = groups.get(i, -1)\n            if i_color == -1:\n                groups[i] = coloring\n                self.coloring(groups, dislike_dic, i, coloring)\n            elif i_color != coloring:\n                return False\n        return True\n"})}),"\n",(0,l.jsx)(n.p,{children:"\ud575\uc2ec\ucf54\ub4dc\ub294"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"self.coloring(groups, dislike_dic, i, coloring)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\uc774\ubd80\ubd84\uc774\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"for\ubb38\uc744 \ub3cc\ub9ac\uba74\uc11c 1\ubd80\ud130 n\uae4c\uc9c0 \ub3c4\ub294\ub370 \ub0b4\uac00 \uc120 coloring\ud55c \ubd80\ubd84\uacfc \uc5f0\uad00\ub41c dislike\ub294 \uc804\ubd80 coloring\ucc98\ub9ac \ud574\uc918\uc57c\ud558\uace0 \uc77c\ub2e8 \ub2e4 coloring \ub418\uba74 \ub2e4\uc74c n\uc778 2\ub97c \uc2dc\uc791\ud558\ub294 \uac83\uc774\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"for\ubb38\uacfc recursive\ub97c \ub3d9\uc2dc\uc5d0 \ud65c\uc6a9\ud574\uc11c \ud574\uacb0\ud574\uc57c \ud558\ub294 \ubb38\uc81c\uc774\ub2e4.!!"}),"\n",(0,l.jsx)(n.p,{children:"copilot \ucf54\ub4dc\ub97c \ucc38\uace0\ud574\uc11c \uc9e0 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:\n        lst_dislikes = [[] for _ in range(0, n+1)]\n        for a, b in dislikes:\n            lst_dislikes[a].append(b)\n            lst_dislikes[b].append(a)\n\n        colors = [-1 for _ in range(0, n+1)]\n        for n in range(1, n+1):\n            if colors[n] == -1 and not self.coloring(lst_dislikes, colors, n, 0):\n                return False\n        return True\n\n    def coloring(self, lst_dislikes: List[List[int]], colors:List[int], n: int, color: int):\n        if colors[n] != -1:\n            return colors[n] == color\n        colors[n] = color\n        for i in lst_dislikes[n]:\n            if not self.coloring(lst_dislikes, colors, i, color ^ 1):\n                return False\n        return True\n"})}),"\n",(0,l.jsx)(n.p,{children:"\ud6e8\uc52c \uac04\ub2e8\ud558\uace0 \ube60\ub974\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"copilot\uc6d0\ubcf8\uc740 \uc544\ub798\uc640 \uac19\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from typing import List\n\nclass Solution:\n    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:\n        lst_dislikes = [[] for _ in range(n)]\n        for i, j in dislikes:\n            lst_dislikes[i - 1].append(j - 1)\n            lst_dislikes[j - 1].append(i - 1)\n            \n        lst_color = [0] * n\n        for i in range(n):\n            if lst_color[i] == 0:\n                lst_color[i] = 1\n                if not self.dfs(lst_dislikes, lst_color, i):\n                    return False\n        return True\n    \n    def dfs(self, lst_dislikes, lst_color, i):\n        for j in lst_dislikes[i]:\n            if lst_color[j] == lst_color[i]:\n                return False\n            if lst_color[j] == 0:\n                lst_color[j] = -lst_color[i]\n                if not self.dfs(lst_dislikes, lst_color, j):\n                    return False\n        return True\n"})})]})}function u(i={}){const{wrapper:n}={...(0,r.R)(),...i.components};return n?(0,l.jsx)(n,{...i,children:(0,l.jsx)(p,{...i})}):p(i)}},8453:(i,n,e)=>{e.d(n,{R:()=>o,x:()=>t});var s=e(6540);const l={},r=s.createContext(l);function o(i){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function t(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(l):i.components||l:o(i.components),s.createElement(r.Provider,{value:n},i.children)}}}]);