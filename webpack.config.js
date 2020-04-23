import path from 'path';

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve('public'),
        filename : 'bundle.js',
    },

        /*In this object, we tell to start from the index.js file under the src directory,
        and, BUNDLE ALL MODULES THAT WE DEPEND ON (IN THE INDEX.JS) into a bundle.js file, under the path, ie. 'public' directory*/

    module : {
        rules : [
            {
                test : /\.js$/, //For every file that ends with '.js' ...[Contd]
                exclude : /node-modules/,
                use : {
                    loader : 'babel-loader',    //[Contd]... Run the babel-loader on those files
                },
            },
        ],
    },
};