"use strict";(self.webpackChunkthink_allof_yours_github_io=self.webpackChunkthink_allof_yours_github_io||[]).push([[8662],{3988:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"ai/gradient_descent","title":"\ud83d\ude80 Gradient Descent","description":"\uacbd\uc0ac \ud558\uac15\ubc95\uc774\ub780?","source":"@site/docs/ai/gradient_descent.mdx","sourceDirName":"ai","slug":"/ai/gradient_descent","permalink":"/docs/ai/gradient_descent","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ai/gradient_descent.mdx","tags":[{"inline":true,"label":"ai","permalink":"/docs/tags/ai"},{"inline":true,"label":"fundamentals","permalink":"/docs/tags/fundamentals"}],"version":"current","frontMatter":{"slug":"gradient_descent","title":"\ud83d\ude80 Gradient Descent","authors":["bundabergman"],"tags":["ai","fundamentals"]},"sidebar":"docsSidebar","previous":{"title":"\ud83d\ude80 Generative AI Fundamentals","permalink":"/docs/ai/generative_ai_fundamentals"}}');var i=t(4848),r=t(8453);const s={slug:"gradient_descent",title:"\ud83d\ude80 Gradient Descent",authors:["bundabergman"],tags:["ai","fundamentals"]},d=void 0,o={},l=[{value:"\uacbd\uc0ac \ud558\uac15\ubc95\uc774\ub780?",id:"\uacbd\uc0ac-\ud558\uac15\ubc95\uc774\ub780",level:2},{value:"\uacbd\uc0ac \ud558\uac15\ubc95\uc758 \uae30\ubcf8 \uac1c\ub150",id:"\uacbd\uc0ac-\ud558\uac15\ubc95\uc758-\uae30\ubcf8-\uac1c\ub150",level:3},{value:"\uacbd\uc0ac \ud558\uac15\ubc95\uc758 \uc218\uc2dd",id:"\uacbd\uc0ac-\ud558\uac15\ubc95\uc758-\uc218\uc2dd",level:3},{value:"\uacbd\uc0ac \ud558\uac15\ubc95 python \ucf54\ub4dc \uc608\uc2dc",id:"\uacbd\uc0ac-\ud558\uac15\ubc95-python-\ucf54\ub4dc-\uc608\uc2dc",level:3}];function c(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\uacbd\uc0ac-\ud558\uac15\ubc95\uc774\ub780",children:"\uacbd\uc0ac \ud558\uac15\ubc95\uc774\ub780?"}),"\n",(0,i.jsx)(e.p,{children:"\uacbd\uc0ac \ud558\uac15\ubc95\uc740 \uba38\uc2e0\ub7ec\ub2dd\uc5d0\uc11c \ucd5c\uc801\ud654 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc77c\ubc18\uc801\uc778 \uae30\uc220"}),"\n",(0,i.jsx)(e.h3,{id:"\uacbd\uc0ac-\ud558\uac15\ubc95\uc758-\uae30\ubcf8-\uac1c\ub150",children:"\uacbd\uc0ac \ud558\uac15\ubc95\uc758 \uae30\ubcf8 \uac1c\ub150"}),"\n",(0,i.jsx)(e.p,{children:"\uacbd\uc0ac \ud558\uac15\ubc95\uc740 \uc190\uc2e4 \ud568\uc218\uc758 \uae30\uc6b8\uae30\ub97c \uacc4\uc0b0\ud558\uc5ec \ucd5c\uc18c\ud654\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc774 \uae30\uc220\uc740 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc758 \ud30c\ub77c\ubbf8\ud130\ub97c \uc870\uc815\ud558\uc5ec \uc190\uc2e4 \ud568\uc218\ub97c \ucd5c\uc18c\ud654\ud558\ub294 \uacfc\uc815\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"\uacbd\uc0ac-\ud558\uac15\ubc95\uc758-\uc218\uc2dd",children:"\uacbd\uc0ac \ud558\uac15\ubc95\uc758 \uc218\uc2dd"}),"\n",(0,i.jsx)(e.p,{children:"\uacbd\uc0ac \ud558\uac15\ubc95\uc758 \uc218\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"$$\n\\theta = \\theta - \\eta \\nabla J(\\theta)\n$$"}),"\n",(0,i.jsx)(e.p,{children:"\uc5ec\uae30\uc11c $\\theta$\ub294 \ubaa8\ub378\uc758 \ud30c\ub77c\ubbf8\ud130, $\\eta$\ub294 \ud559\uc2b5\ub960, $\\nabla J(\\theta)$\ub294 \uc190\uc2e4 \ud568\uc218\uc758 \uae30\uc6b8\uae30\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"\uacbd\uc0ac-\ud558\uac15\ubc95-python-\ucf54\ub4dc-\uc608\uc2dc",children:"\uacbd\uc0ac \ud558\uac15\ubc95 python \ucf54\ub4dc \uc608\uc2dc"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import numpy as np\n\n# \ud65c\uc131\ud654 \ud568\uc218\ub85c \uc2dc\uadf8\ubaa8\uc774\ub4dc \ud568\uc218 \uc815\uc758\ud558\uae30\ndef sigmoid(x):\n    return 1 / (1 + np.exp(-x))\n\n# \uc2dc\uadf8\ubaa8\uc774\ub4dc \ud568\uc218\uc758 \ub3c4\ud568\uc218\ndef sigmoid_prime(x):\n    return sigmoid(x) * (1 - sigmoid(x))\n\n# \uc608\uc2dc \uc785\ub825\uac12\nX = np.array([0.5, 0.8])\n# \ubaa9\ud45c\uac12\ny = 0.2\n# \ucd9c\ub825 \uac00\uc911\uce58\uc758 \uc785\ub825\nnp.random.seed(42)\nweights = np.random.rand(2)\n\n# \ud559\uc2b5\ub960\nlearning_rate = 0.5\n\n# \uc2e0\uacbd\ub9dd \ucd9c\ub825 (y-hat)\nh = np.dot(X, weights)\nnn_output = sigmoid(h)\n\n# \ucd9c\ub825 \uc624\ucc28 (y - y-hat)\nerror = y - nn_output\n\n# \ucd9c\ub825 \uae30\uc6b8\uae30 (\uc624\ucc28\uac00 \uae30\uc6b8\uae30\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5 sigmoid\ub97c \ubbf8\ubd84\ud558\uc5ec \uacc4\uc0b0)\noutput_gradient = error * sigmoid_prime(h)\n\n# \uacbd\uc0ac \ud558\uac15\ubc95 \ndel_w = learning_rate * output_gradient * X\n\n# \uac00\uc911\uce58 \uc5c5\ub370\uc774\ud2b8\nweights += del_w\n\nprint(weights)\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>d});var a=t(6540);const i={},r=a.createContext(i);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);