
import React from 'react';
import { List, Show, Datagrid, ImageInput, ImageField, DateField, TextField, ReferenceManyField, DisabledInput, TabbedForm, FormTab, ReferenceField, EditButton, ShowButton, NumberField, RichTextField, UrlField } from 'admin-on-rest/lib/mui';

import { CardActions } from 'material-ui/Card';
import { ListButton, DeleteButton } from 'admin-on-rest';
import OcrResultButton from './ocrresultButton';

import Icon from 'material-ui/svg-icons/action/receipt'; //shopping-cart

export const ReceiptIcon = Icon;



const OcrResultEditActions = ({ basePath, data }) => (
    <CardActions style={{ float: 'right' }}>
        {/* <OcrResultButton record={data} /> */}
        <ListButton basePath={basePath} />
        <DeleteButton basePath={basePath} record={data} />
    </CardActions>
);


export const ReceiptList = (props) => (
    <List {...props} sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="store" />
            <TextField source="amount" />
            <DateField source="date" />
            <TextField source="user" />
            <ShowButton />
        </Datagrid>
    </List>
);

this.state = {
      accepted: [],
      rejected: []
    }

export const ReceiptShow = (props) => (
    <Show {...props} actions={<OcrResultEditActions />}>
        <TabbedForm>
            <FormTab label="Receipt">
                <DisabledInput source="id" />
                <DisabledInput source="store" />
                <DisabledInput source="amount" />
                <DisabledInput source="date" />
                <DisabledInput source="user" />
            </FormTab>
            <FormTab label="Items">
                <ReferenceManyField reference="receiptitem" target="receipt" addLabel={false}>
                    <Datagrid>
                        <ReferenceField label="Product" source="product" reference="product">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="price" />
                        <ShowButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="OCR-Results">
                <ImageInput source="user" label="New Scan" accept="image/*" multiple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <ReferenceManyField reference="ocrresult" target="receipt" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <DateField source="timestamp" />
                        <NumberField source="quality" />
                        <NumberField source="psm" />
                        <TextField source="lang" />
                        <ShowButton resource="ocrresult" record="id" />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Show>
);