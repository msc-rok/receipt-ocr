
import React from 'react';
import { List, Show, Datagrid, DateField, TextField, ReferenceManyField, DisabledInput, TabbedForm, FormTab, ReferenceField, EditButton, ShowButton, NumberField, RichTextField, UrlField } from 'admin-on-rest/lib/mui';

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

export const ReceiptShow = (props) => (
    <Show {...props}>
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
                <ReferenceManyField reference="ocrresult" target="receipt" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <DateField source="timestamp" />
                        <NumberField source="quality" />
                        <NumberField source="psm" />
                        <TextField source="lang" />
                        <ShowButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Show>
);