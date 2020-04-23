module.exports = {
    presets : ['@babel/react', '@babel/env'],   /*This instructs babel to use the 2 presets we want,
                                                    one to transform the JSX,
                                                    and other to safely use Modern JS features, without worrying about old browsers, or browsers that dont understand them*/
    plugins : ['@babel/plugin-proposal-class-properties'],  //plugin needed to enable the new 'Class Fields syntax'
};