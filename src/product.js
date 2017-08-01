
import React from 'react';
import { List, Edit, Create, Filter, Datagrid, ReferenceField, TextField, EditButton, ShowButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, TabbedForm, FormTab, ReferenceManyField } from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/action/redeem';
export const ProductIcon = Icon;

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Product Name..." source="name" alwaysOn />
    </Filter>
);

const ProductTitle = ({ record }) => {
    return <span>Product {record ? `${record.name}` : ''}</span>;
};

export const ProductList = (props) => (
    <List {...props} sort={{ field: 'name', order: 'ASC' }} filters={<ProductFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Product" >
                <DisabledInput source="id" />
                <TextInput source="name" />
            </FormTab>
            <FormTab label="Receipt Items">
                <ReferenceManyField reference="receiptitem" target="product" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceField label="Receipt" source="receipt" reference="receipt">
                            <TextField source="id" />
                        </ReferenceField>
                        <TextField source="price" />
                        <ShowButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);