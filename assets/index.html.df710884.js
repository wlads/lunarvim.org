import{r as p,o as i,c,a as s,b as a,w as l,F as r,d as n,e}from"./app.c4dc980c.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},m=s("h1",{id:"overview",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),n(" Overview")],-1),k=n("LunarVim strives to have support for all major languages. This is made possible by utilizing some of the great plugins in Neovim's ecosystem. Such plugins are "),b={href:"https://github.com/neovim/nvim-lspconfig",target:"_blank",rel:"noopener noreferrer"},h=n("nvim-lspconfig"),g=n(", for LSP support, and "),f={href:"https://github.com/jose-elias-alvarez/null-ls.nvim",target:"_blank",rel:"noopener noreferrer"},v=n("Null-ls"),_=n(" to provide support for handling external formatters, such as "),q={href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"},y=n("prettier"),w=n(" and "),x={href:"https://github.com/eslint/eslint",target:"_blank",rel:"noopener noreferrer"},L=n("eslint"),I=n(". Furthermore, LunarVim integrates with "),N={href:"https://github.com/nvim-treesitter/nvim-treesitter",target:"_blank",rel:"noopener noreferrer"},A=n("nvim-treesitter"),S=n(" to provide rich syntax highlighting and other language parsing magic."),V=s("p",null,"If your language is not supported please check the following links and file a ticket so we can",-1),C=n("Check if LSP support is available in the lspconfig "),R={href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",target:"_blank",rel:"noopener noreferrer"},T=n("repo"),j=n("Check if your linter or formatter is available in the null-ls "),B={href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",target:"_blank",rel:"noopener noreferrer"},F=n("repo"),z=n("Check if your syntax is supported in the treesitter "),E={href:"https://github.com/nvim-treesitter/nvim-treesitter",target:"_blank",rel:"noopener noreferrer"},P=n("repo"),M=s("h2",{id:"at-a-glance",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#at-a-glance","aria-hidden":"true"},"#"),n(" At a glance")],-1),O=s("p",null,"You can use the following commands to check some information about any language servers that you have configured.",-1),U=e("<li><p><code>:LvimInfo</code></p><ul><li>Contains information about all the servers attached to the buffer you are editing and their current capabilities, such as formatting and go-to definition support. It also includes information related to any linters and formatters that are, or can be, configured.</li><li>keybind: <code>&lt;leader&gt;Li</code></li></ul></li><li><p><code>:LspInfo</code></p><ul><li>Contains basic information about all the servers that are running.</li><li>keybind: <code>&lt;leader&gt;li</code></li></ul></li>",2),G=s("p",null,[s("code",null,":LspInstallInfo")],-1),Y=n("Contains information about all the servers that you can manage with "),D={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},$=n("nvim-lsp-installer"),J=n("."),H=s("li",null,[n("keybind: "),s("code",null,"<leader>lI")],-1),K=e(`<h2 id="lsp-support" tabindex="-1"><a class="header-anchor" href="#lsp-support" aria-hidden="true">#</a> LSP support</h2><h3 id="installing-and-updating-a-server" tabindex="-1"><a class="header-anchor" href="#installing-and-updating-a-server" aria-hidden="true">#</a> Installing and updating a server</h3><h4 id="automatic-server-installation" tabindex="-1"><a class="header-anchor" href="#automatic-server-installation" aria-hidden="true">#</a> Automatic server installation</h4><p>By default, most supported language servers will get automatically installed once you open the supported file-type, e.g, opening a Python file for the first time will install <code>Pyright</code> and configure it automatically for you.</p><ul><li>configuration option</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_servers_installation <span class="token operator">=</span> <span class="token keyword">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6),Q=n("Please refer to "),W={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},X=n("nvim-lsp-installer"),Z=n(" to see the updated full list of currently available servers."),nn=e(`<p>To install a supported language server:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:LspInstall <span class="token code-snippet code keyword">\`&lt;your_language_server&gt;\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You can also toggle <code>&lt;:LspInstallInfo&gt;</code> and interactively choose which servers to install.</p><h3 id="server-override" tabindex="-1"><a class="header-anchor" href="#server-override" aria-hidden="true">#</a> Server override</h3><p><code>lvim.lsp.automatic_configuration.skipped_servers</code> contains a list of servers that will <strong>not</strong> be automatically configured by default, for example only <code>tsserver</code> is allowed for JS-family languages, and when a language has more than one server available, then the most popular one is usually chosen.</p><div class="custom-container tip"><p class="custom-container-title">Notice</p><p>Overriding a server will completely bypass the lsp-installer, so you would have to manage the installation for any of those servers manually.</p></div><p>See the current list</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>See the default list</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Notice</p><p>Any changes to <code>lvim.lsp.automatic_configuration.skipped_servers</code> <strong>must</strong> be followed by <code>:LvimCacheReset</code> to take effect.</p></div><h3 id="server-setup" tabindex="-1"><a class="header-anchor" href="#server-setup" aria-hidden="true">#</a> Server setup</h3>`,12),sn=n("LunarVim uses "),an=n("filetype plugins"),tn=n(" to enable lazy-loading the setup of a language server. A template generator is used to create "),en=s("code",null,"ftplugin",-1),on=n(" files and populate them with the setup call."),pn=e(`<ul><li>configuration option</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>templates_dir <span class="token operator">=</span> <span class="token function">join_paths</span><span class="token punctuation">(</span><span class="token function">get_runtime_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;after&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ftplugin&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>A typical setup call with default arguments</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- edit this file by running \`:lua vim.cmd(&quot;edit &quot; .. lvim.lsp.templates_dir .. &quot;/lua.lua&quot;)\`</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token string">&quot;sumneko_lua&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can quickly find these files by running <code>&lt;leader&gt;Lf</code> -&gt; &quot;Find LunarVim Files&quot;</p></div><h4 id="overriding-the-default-setup-options" tabindex="-1"><a class="header-anchor" href="#overriding-the-default-setup-options" aria-hidden="true">#</a> Overriding the default setup options</h4><p>Add the server you wish to configure manually to <code>lvim.lsp.automatic_configuration.skipped_servers</code>.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;pyright&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8),ln=n("Now you can set it up manually using the builtin "),cn={href:"https://github.com/LunarVim/LunarVim/blob/rolling/lua/lvim/lsp/manager.lua",target:"_blank",rel:"noopener noreferrer"},rn=n("lsp-manager"),un=e(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">--- list of options that should take predence over any of LunarVim&#39;s defaults</span>
<span class="token comment">--- check the lspconfig documentation for a list of all possible options</span>
<span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token string">&quot;pyright&quot;</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Alternatively, set it up using the <code>lspconfig</code> API directly</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">--- check the lspconfig documentation for a list of all possible options</span>
<span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lspconfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;pyright&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="server-settings" tabindex="-1"><a class="header-anchor" href="#server-settings" aria-hidden="true">#</a> Server settings</h3><p>To set a setting for your language server:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspSettings <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>
<span class="token punctuation">:</span>LspSettings <span class="token operator">&lt;</span>NAME_OF_LANGUAGE_SERVER<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6),dn=n("This will create a file in "),mn=s("code",null,"$LUNARVIM_CONFIG_DIR/lsp-settings",-1),kn=n(", to enable persistent changes. Refer to the documentation of "),bn={href:"https://github.com/tamago324/nlsp-settings.nvim/blob/main/schemas/README.md",target:"_blank",rel:"noopener noreferrer"},hn=n("nlsp-settings"),gn=n(" for a full updated list of supported language servers."),fn=e(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Make sure to install <code>jsonls</code> for autocompletion.</p></div><h2 id="linting-formatting" tabindex="-1"><a class="header-anchor" href="#linting-formatting" aria-hidden="true">#</a> Linting/Formatting</h2><p>Set a linter/formatter, this will override the language server formatting capabilities (if it exists)</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>
formatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span> command <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--print-width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescriptreact&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>
linters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span> command <span class="token operator">=</span> <span class="token string">&quot;flake8&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;shellcheck&quot;</span><span class="token punctuation">,</span>
    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;codespell&quot;</span><span class="token punctuation">,</span>
    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> code_actions <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.code_actions&quot;</span>
code_actions<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;proselint&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,4),vn=n("Another method is to reference the linter/formatter/code_actions by their names, as referenced in "),_n={href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",target:"_blank",rel:"noopener noreferrer"},qn=n("null-ls docs"),yn=n(", if you do not want to customize the command"),wn=e(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>
formatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span> name <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>
linters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span> name <span class="token operator">=</span> <span class="token string">&quot;flake8&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name <span class="token operator">=</span> <span class="token string">&quot;shellcheck&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;codespell&quot;</span><span class="token punctuation">,</span>
    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> code_actions <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.code_actions&quot;</span>
code_actions<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;proselint&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>This will lookup the provided name in the builtin configurations of <code>null_ls</code> and apply them. It can be considered equivalent to <code>null_ls.builtins.diagnostics.{name}</code>/<code>null_ls.builtins.formatting.{name}</code>/<code>null_ls.builtins.code_actions.{name}</code></p><p><em>Note: Formatters&#39; or Linters&#39; or Code Actions installation is not managed by LunarVim. Refer to the each tool&#39;s respective manual for installation steps.</em></p><h3 id="custom-arguments" tabindex="-1"><a class="header-anchor" href="#custom-arguments" aria-hidden="true">#</a> Custom arguments</h3><p>It&#39;s also possible to add custom arguments for each linter/formatter/code_actions.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>
formatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">---@usage arguments to pass to the formatter</span>
    <span class="token comment">-- these cannot contain whitespaces, options such as \`--line-width 80\` become either \`{&#39;--line-width&#39;, &#39;80&#39;}\` or \`{&#39;--line-width=80&#39;}\`</span>
    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--print-width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>
linters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;shellcheck&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">---@usage arguments to pass to the formatter</span>
    <span class="token comment">-- these cannot contain whitespaces, options such as \`--line-width 80\` become either \`{&#39;--line-width&#39;, &#39;80&#39;}\` or \`{&#39;--line-width=80&#39;}\`</span>
    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> code_actions <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.code_actions&quot;</span>
code_actions<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;proselint&quot;</span><span class="token punctuation">,</span>
    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><em>Note: remember that arguments cannot contains spaces, options such as <code>--line-width 80</code> become either <code>{&#39;--line-width&#39;, &#39;80&#39;}</code> or <code>{&#39;--line-width=80&#39;}</code>.</em></p><h3 id="multi-languages-per-linter-formatter" tabindex="-1"><a class="header-anchor" href="#multi-languages-per-linter-formatter" aria-hidden="true">#</a> Multi languages per linter/formatter</h3><p>By default a formatter will attach to all the filetypes it supports.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>
formatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">---@usage specify which filetypes to enable. By default a providers will attach to all the filetypes it supports.</span>
    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescriptreact&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><em>Note: removing the <code>filetypes</code> argument will allow the formatter to attach to all the default filetypes it supports.</em></p><h3 id="multi-linters-formatters-code-actions-per-language" tabindex="-1"><a class="header-anchor" href="#multi-linters-formatters-code-actions-per-language" aria-hidden="true">#</a> Multi linters/formatters/code_actions per language</h3><p>There are no restrictions on setting up multiple formatters per language</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>
formatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
  <span class="token punctuation">{</span> command <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command <span class="token operator">=</span> <span class="token string">&quot;isort&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>
linters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;codespell&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">---@usage specify which filetypes to enable. By default a providers will attach to all the filetypes it supports.</span>
    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">local</span> code_actions <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.code_actions&quot;</span>
code_actions<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    command <span class="token operator">=</span> <span class="token string">&quot;proselint&quot;</span><span class="token punctuation">,</span>
    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tex&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="lazy-loading-the-linter-formatter-code-actions-setup" tabindex="-1"><a class="header-anchor" href="#lazy-loading-the-linter-formatter-code-actions-setup" aria-hidden="true">#</a> Lazy-loading the linter/formatter/code_actions setup</h3>`,15),xn=n("By default, all null-ls providers are checked on startup. If you want to avoid that or want to only set up the provider when you opening the associated file-type, then you can use "),Ln=n("filetype plugins"),In=n(" for this purpose."),Nn=e(`<p>Let&#39;s take <code>python</code> as an example:</p><ol><li>create a file called <code>python.lua</code> in the <code>$LUNARVIM_CONFIG_DIR/after/ftplugin</code> folder</li><li>add the following snippet</li></ol><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>
linters<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">{</span>command <span class="token operator">=</span> <span class="token string">&quot;flake8&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="formatting-on-save" tabindex="-1"><a class="header-anchor" href="#formatting-on-save" aria-hidden="true">#</a> Formatting on save</h3><p>You can disable auto-command and is to true by default.</p><ul><li>configuration option</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>format_on_save <span class="token operator">=</span> <span class="token keyword">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,7);function An(Sn,Vn){const t=p("ExternalLinkIcon"),o=p("RouterLink");return i(),c(r,null,[m,s("p",null,[k,s("a",b,[h,a(t)]),g,s("a",f,[v,a(t)]),_,s("a",q,[y,a(t)]),w,s("a",x,[L,a(t)]),I,s("a",N,[A,a(t)]),S]),V,s("ul",null,[s("li",null,[C,s("a",R,[T,a(t)])]),s("li",null,[j,s("a",B,[F,a(t)])]),s("li",null,[z,s("a",E,[P,a(t)])])]),M,O,s("ul",null,[U,s("li",null,[G,s("ul",null,[s("li",null,[Y,s("a",D,[$,a(t)]),J]),H])])]),K,s("p",null,[Q,s("a",W,[X,a(t)]),Z]),nn,s("p",null,[sn,a(o,{to:"/configuration/07-ftplugin.html"},{default:l(()=>[an]),_:1}),tn,en,on]),pn,s("p",null,[ln,s("a",cn,[rn,a(t)])]),un,s("p",null,[dn,mn,kn,s("a",bn,[hn,a(t)]),gn]),fn,s("p",null,[vn,s("a",_n,[qn,a(t)]),yn]),wn,s("p",null,[xn,a(o,{to:"/configuration/07-ftplugin.html"},{default:l(()=>[Ln]),_:1}),In]),Nn],64)}var Tn=u(d,[["render",An]]);export{Tn as default};