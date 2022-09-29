import{r as a,o,c as t,a as n,b as i,F as c,d as s,e as l}from"./app.c4dc980c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const p={},u=n("h2",{id:"compiling-neovim-from-source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#compiling-neovim-from-source","aria-hidden":"true"},"#"),s(" Compiling Neovim from Source")],-1),m=s("First, get the dependencies. For distributions other than Ubuntu or Arch, go "),d={href:"https://github.com/neovim/neovim/wiki/Building-Neovim#build-prerequisites",target:"_blank",rel:"noopener noreferrer"},b=s("here"),h=s("."),v=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gettext libtool libtool-bin autoconf automake cmake g++ pkg-config <span class="token function">unzip</span> build-essential
<span class="token comment">#Arch</span>
<span class="token function">sudo</span> pacman -S base-devel cmake <span class="token function">unzip</span> ninja tree-sitter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Download and compile Neovim:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable"><span class="token variable">$(</span>mktemp -d<span class="token variable">)</span></span>
<span class="token function">git</span> clone https://github.com/neovim/neovim
<span class="token builtin class-name">cd</span> neovim
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token assign-left variable">CMAKE_BUILD_TYPE</span><span class="token operator">=</span>Release <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">sudo</span> <span class="token function">rm</span> -r neovim
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>or if you are on Arch you can get the development version from the AUR:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S neovim-git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>If you are on Gentoo you have to emerge the 9999 neovim version with luajit as the lua single target.</p>`,6);function k(g,f){const e=a("ExternalLinkIcon");return o(),t(c,null,[u,n("p",null,[m,n("a",d,[b,i(e)]),h]),v],64)}var N=r(p,[["render",k]]);export{N as default};