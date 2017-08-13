import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import authClient from './authClient';
import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import translations from './i18n';

// custom
import constants from './constants.js';
import postgrestClient from './postgrest-client';

import { OCRResultList, OCRResultShow, OCRResultIcon } from './ocrresult';
import { ProductList, ProductEdit, ProductCreate, ProductIcon } from './product';
import { ReceiptItemList, ReceiptItemEdit, ReceiptItemCreate, ReceiptItemIcon } from './receiptitem';
import { ReceiptList, ReceiptEdit, ReceiptIcon } from './receipt';

var API_ROUTE = "/api";
if (constants.IS_DEVELOPMENT) API_ROUTE = "";

class App extends Component {
    render() {
        return (
            <Admin title="Receipt-OCR Admin"
                restClient={postgrestClient(API_ROUTE)}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authClient={authClient}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
            >
                <Resource name="product" list={ProductList} show={ProductEdit} edit={ProductEdit} create={ProductCreate} remove={Delete} icon={ProductIcon} />
                <Resource name="receipt" list={ReceiptList} show={ReceiptEdit} edit={ReceiptEdit} remove={Delete} icon={ReceiptIcon} />
                <Resource name="receiptitem" list={ReceiptItemList} show={ReceiptItemEdit} edit={ReceiptItemEdit} create={ReceiptItemCreate} remove={Delete} icon={ReceiptItemIcon} />
                <Resource name="ocrresult" list={OCRResultList} show={OCRResultShow} remove={Delete} icon={OCRResultIcon} />
            </Admin>
        );
    }
}

export default App;