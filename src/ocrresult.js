
import React from 'react';
import { List, Filter, Edit, Show, ShowButton, TabbedForm, FormTab, Create, SimpleForm, UrlField, ReferenceField, ReferenceManyField, Datagrid, RichTextField, ImageField, NumberField, DateField, TextField, DisabledInput } from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/action/find-in-page';
export const OCRResultIcon = Icon;

export const OCRResultList = (props) => (
    <List {...props} title="OCR-Results List" sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Receipt" source="receipt" reference="receipt">
                <TextField source="id" />
            </ReferenceField>
            <DateField source="timestamp" />
            <NumberField source="quality" />
            <NumberField source="psm" />
            <TextField source="lang" />
            <ShowButton />
        </Datagrid>
    </List>
);

export const OCRResultShow = (props) => (
    <Show {...props}>
        <TabbedForm>
            <FormTab label="OCR-Result">
                <DisabledInput source="id" />
                <ReferenceField label="Receipt" source="receipt" reference="receipt">
                    <TextField source="id" />
                </ReferenceField>
                <DisabledInput source="timestamp" />
                <DisabledInput source="quality" />
                <DisabledInput source="psm" />
                <DisabledInput source="lang" />
            </FormTab>
            <FormTab label="Text">
                <RichTextField source="result.text" label="Result" />
            </FormTab>
            <FormTab label="Picture">
                <ImageField source="url" label="Picture" />
                <UrlField source="url"/>
            </FormTab>
        </TabbedForm>
    </Show>
);

/*

 */