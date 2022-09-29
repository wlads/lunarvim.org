import{e as a}from"./app.c4dc980c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall <span class="token keyword">python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>python <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;jedi_language_server&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pylsp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pyright&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>python <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;autopep8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;isort&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;reorder-python-imports&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yapf&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-linters" tabindex="-1"><a class="header-anchor" href="#supported-linters" aria-hidden="true">#</a> Supported linters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>python <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;flake8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pylint&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspSettings pyright
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall <span class="token keyword">python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/python.lua</span>
<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>
dap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14);function t(p,i){return e}var l=n(s,[["render",t]]);export{l as default};