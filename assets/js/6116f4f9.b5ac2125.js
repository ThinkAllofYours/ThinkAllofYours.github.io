"use strict";(self.webpackChunkthink_allof_yours_github_io=self.webpackChunkthink_allof_yours_github_io||[]).push([[1696],{6570:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>_,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"ai/backpropagtion","title":"\ud83d\ude80 \uc5ed\uc804\ud30c \uc54c\uace0\ub9ac\uc998","description":"\ucf54\ub4dc\uc640 \ud568\uaed8 \uac04\ub2e8\ud558\uac8c \uc815\ub9ac","source":"@site/docs/ai/backpropagtion.mdx","sourceDirName":"ai","slug":"/ai/backpropagtion","permalink":"/docs/ai/backpropagtion","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ai/backpropagtion.mdx","tags":[{"inline":true,"label":"ai","permalink":"/docs/tags/ai"},{"inline":true,"label":"backpropagtion","permalink":"/docs/tags/backpropagtion"}],"version":"current","frontMatter":{"slug":"backpropagtion","title":"\ud83d\ude80 \uc5ed\uc804\ud30c \uc54c\uace0\ub9ac\uc998","authors":["bundabergman"],"tags":["ai","backpropagtion"]},"sidebar":"docsSidebar","previous":{"title":"neural_network_tensor","permalink":"/docs/ai/neural_network_tensor"},"next":{"title":"\ud83d\ude80 Generative AI Fundamentals","permalink":"/docs/ai/generative_ai_fundamentals"}}');var o=t(4848),i=t(8453);const s={slug:"backpropagtion",title:"\ud83d\ude80 \uc5ed\uc804\ud30c \uc54c\uace0\ub9ac\uc998",authors:["bundabergman"],tags:["ai","backpropagtion"]},a="\uc5ed\uc804\ud30c \uc54c\uace0\ub9ac\uc998",d={},u=[{value:"\ucf54\ub4dc\uc640 \ud568\uaed8 \uac04\ub2e8\ud558\uac8c \uc815\ub9ac",id:"\ucf54\ub4dc\uc640-\ud568\uaed8-\uac04\ub2e8\ud558\uac8c-\uc815\ub9ac",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\uc5ed\uc804\ud30c-\uc54c\uace0\ub9ac\uc998",children:"\uc5ed\uc804\ud30c \uc54c\uace0\ub9ac\uc998"})}),"\n",(0,o.jsx)(e.h2,{id:"\ucf54\ub4dc\uc640-\ud568\uaed8-\uac04\ub2e8\ud558\uac8c-\uc815\ub9ac",children:"\ucf54\ub4dc\uc640 \ud568\uaed8 \uac04\ub2e8\ud558\uac8c \uc815\ub9ac"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'import numpy as np\nfrom data_prep import features, targets, features_test, targets_test\n\n# \uc7ac\ud604\uc131\uc744 \uc704\ud55c \ub79c\ub364 \uc2dc\ub4dc \uc124\uc815\nnp.random.seed(21)\n\ndef sigmoid(x):\n    """\n    \uc2dc\uadf8\ubaa8\uc774\ub4dc \ud65c\uc131\ud654 \ud568\uc218\n    \uc785\ub825\uac12\uc744 0~1 \uc0ac\uc774\uc758 \uac12\uc73c\ub85c \ubcc0\ud658\n    Parameters:\n        x: \uc785\ub825 \uac12\n    Returns:\n        sigmoid \ud568\uc218\ub97c \uc801\uc6a9\ud55c \uacb0\uacfc \uac12\n    """\n    return 1 / (1 + np.exp(-x))\n\n# \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130 \uc124\uc815\nn_hidden = 2      # \uc740\ub2c9\uce35\uc758 \ub274\ub7f0 \uac1c\uc218\nepochs = 900      # \uc804\uccb4 \ub370\uc774\ud130\uc14b\uc744 \ud559\uc2b5\ud560 \ud69f\uc218\nlearnrate = 0.005 # \ud559\uc2b5\ub960 - \uac00\uc911\uce58 \uc5c5\ub370\uc774\ud2b8 \uc2a4\ud15d \uc0ac\uc774\uc988\n\n# \ub370\uc774\ud130 \ucc28\uc6d0 \uc815\ubcf4\nn_records, n_features = features.shape\nlast_loss = None\n\n# \uac00\uc911\uce58 \ucd08\uae30\ud654 - Xavier/Glorot \ucd08\uae30\ud654 \ubc29\ubc95 \uc0ac\uc6a9\nweights_input_hidden = np.random.normal(scale=1 / n_features ** .5,\n                                      size=(n_features, n_hidden))\nweights_hidden_output = np.random.normal(scale=1 / n_features ** .5,\n                                       size=n_hidden)\n\n# \ud559\uc2b5 \uc2dc\uc791\nfor e in range(epochs):\n    # \uac00\uc911\uce58 \ubcc0\ud654\ub7c9\uc744 \uc800\uc7a5\ud560 \ud589\ub82c \ucd08\uae30\ud654\n    del_w_input_hidden = np.zeros(weights_input_hidden.shape)\n    del_w_hidden_output = np.zeros(weights_hidden_output.shape)\n    \n    # \uac01 \ud6c8\ub828 \ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc21c\uc804\ud30c\uc640 \uc5ed\uc804\ud30c \uc218\ud589\n    for x, y in zip(features.values, targets):\n        ### \uc21c\uc804\ud30c(Forward Pass) ###\n        # \uc785\ub825\uce35 -> \uc740\ub2c9\uce35\n        hidden_input = np.dot(x, weights_input_hidden)    # \uc740\ub2c9\uce35 \uc785\ub825 \uacc4\uc0b0\n        hidden_output = sigmoid(hidden_input)             # \uc740\ub2c9\uce35 \ud65c\uc131\ud654\n        \n        # \uc740\ub2c9\uce35 -> \ucd9c\ub825\uce35\n        output = sigmoid(np.dot(hidden_output, weights_hidden_output))  # \ucd5c\uc885 \ucd9c\ub825\n        \n        ### \uc5ed\uc804\ud30c(Backward Pass) ###\n        # \ucd9c\ub825\uce35 \uc624\ucc28 \uacc4\uc0b0\n        error = y - output  # \uc2e4\uc81c\uac12\uacfc \uc608\uce21\uac12\uc758 \ucc28\uc774\n        \n        # \ucd9c\ub825\uce35\uc758 \ub378\ud0c0 \uacc4\uc0b0\n        # \u03b4 = error * output * (1 - output)\n        output_error_term = error * output * (1 - output)\n        \n        # \uc740\ub2c9\uce35\uc73c\ub85c \uc624\ucc28 \uc804\ud30c\n        # \uc740\ub2c9\uce35\uc774 \ucd9c\ub825\uce35 \uc624\ucc28\uc5d0 \uae30\uc5ec\ud55c \uc815\ub3c4 \uacc4\uc0b0\n        hidden_error = np.dot(output_error_term, weights_hidden_output)\n        \n        # \uc740\ub2c9\uce35\uc758 \ub378\ud0c0 \uacc4\uc0b0\n        # \u03b4 = hidden_error * hidden_output * (1 - hidden_output)\n        hidden_error_term = hidden_error * hidden_output * (1 - hidden_output)\n        \n        # \uac00\uc911\uce58 \ubcc0\ud654\ub7c9 \ub204\uc801\n        del_w_hidden_output += output_error_term * hidden_output  # \uc740\ub2c9\uce35->\ucd9c\ub825\uce35 \uac00\uc911\uce58\n        del_w_input_hidden += hidden_error_term * x[:, None]     # \uc785\ub825\uce35->\uc740\ub2c9\uce35 \uac00\uc911\uce58\n    \n    # \ubbf8\ub2c8\ubc30\uce58\uc758 \ud3c9\uade0\uc73c\ub85c \uac00\uc911\uce58 \uc5c5\ub370\uc774\ud2b8\n    weights_input_hidden += learnrate * del_w_input_hidden / n_records\n    weights_hidden_output += learnrate * del_w_hidden_output / n_records\n    \n    # \ud6c8\ub828 \uacfc\uc815 \ubaa8\ub2c8\ud130\ub9c1 - \ub9e4 10%\ub9c8\ub2e4 \uc190\uc2e4 \ucd9c\ub825\n    if e % (epochs / 10) == 0:\n        hidden_output = sigmoid(np.dot(x, weights_input_hidden))\n        out = sigmoid(np.dot(hidden_output, weights_hidden_output))\n        loss = np.mean((out - targets) ** 2)  # MSE \uc190\uc2e4 \uacc4\uc0b0\n        \n        # \uc190\uc2e4\uc774 \uc99d\uac00\ud558\ub294\uc9c0 \ud655\uc778 (\uacbd\uace0 \ucd9c\ub825)\n        if last_loss and last_loss < loss:\n            print("Train loss: ", loss, "  WARNING - Loss Increasing")\n        else:\n            print("Train loss: ", loss)\n        last_loss = loss\n\n# \ucd5c\uc885 \ud14c\uc2a4\ud2b8 \uc138\ud2b8 \uc131\ub2a5 \ud3c9\uac00\nhidden = sigmoid(np.dot(features_test, weights_input_hidden))\nout = sigmoid(np.dot(hidden, weights_hidden_output))\npredictions = out > 0.5  # 0.5\ub97c \uc784\uacc4\uac12\uc73c\ub85c \uc774\uc9c4 \ubd84\ub958\naccuracy = np.mean(predictions == targets_test)\nprint("Prediction accuracy: {:.3f}".format(accuracy))\n'})})]})}function _(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var r=t(6540);const o={},i=r.createContext(o);function s(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);