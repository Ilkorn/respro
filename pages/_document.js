import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        return {
            ...page,
            styleTags
        };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet" />
                    <script type='text/javascript' src='https://rentafont.com/javascripts/webfonts.js' async></script>
                    <script type='text/javascript'
                        dangerouslySetInnerHTML={{
                            __html: `
                                WebFontConfig = {
                                    id: 'ODAwMDZvcmRlcjY5NjYy',
                                    fonts: [/*'Futura PT Light'*/'655212', /*'Futura PT Medium'*/'655213', /*'Futura PT Demi'*/'655214'],
                                    by_style: 1
                                };
                            `
                        }}
                    />
                    <link rel="icon" type="image/ico" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
                    <style>{'.pac-container::after { display: none!important }'}</style>
                    {this.props.styleTags}
                </Head>
                <body style={{ fontSize: '16px' }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
