// in src/App.js
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// <Admin theme={getMuiTheme(darkBaseTheme)}


import ReceiptIcon from 'material-ui/svg-icons/action/receipt'; //shopping-cart
import ReceiptItemIcon from 'material-ui/svg-icons/action/euro-symbol';
import OCRResultIcon from 'material-ui/svg-icons/action/find-in-page';
import ProductIcon from 'material-ui/svg-icons/action/redeem';

import postgrestClient from './postgrest-client';
import Dashboard from './dashboard';

import { OCRResultList, OCRResultShow} from './ocrresult';
import { ProductList, ProductEdit, ProductCreate} from './product';
import { ReceiptItemList, ReceiptItemEdit, ReceiptItemCreate } from './receiptitem';
import { ReceiptList,ReceiptShow } from './receipt';
var API_ROUTE = process.env.API_ROUTE || "";

console.log('##############################################  ' + API_ROUTE);

const App = () => (
    <Admin title="Receipt-OCR Admin" dashboard={Dashboard} restClient={postgrestClient("/api")}>
        <Resource name="product" list={ProductList} show={ProductEdit} edit={ProductEdit} create={ProductCreate} remove={Delete} icon={ProductIcon}/>
        <Resource name="receipt" list={ReceiptList} show={ReceiptShow} edit={ReceiptShow} remove={Delete} icon={ReceiptIcon}/>
        <Resource name="receiptitem" list={ReceiptItemList} show={ReceiptItemEdit} edit={ReceiptItemEdit} create={ReceiptItemCreate} remove={Delete} icon={ReceiptItemIcon} options={{ label: 'Receipt Items' }}/>
        <Resource name="ocrresult" list={OCRResultList} show={OCRResultShow} edit={OCRResultShow} remove={Delete} icon={OCRResultIcon} options={{ label: 'OCR-Results' }}/>
    </Admin>
);

export default App;