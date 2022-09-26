npm init -y

安装 eslint

npm init @eslint/config
check syntax and find problems


https://www.bilibili.com/video/BV1Mg411A75T/?spm_id_from=333.788.recommend_more_video.19


npx eslint index.js 

如果使用的react,需要安装插件
npm i eslint-plugin-react --save-dev
在extends中添加react
plugin:react/jsx-runtime // react 17.0.0 之后需要添加这个 不需要导入react就可以使用jsx