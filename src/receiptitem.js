
import React from 'react';
import { List, Filter,Edit, Create, SimpleForm, Datagrid,TextInput, TextField ,EditButton, ReferenceField,ReferenceInput, NumberInput, SelectInput, DisabledInput,AutocompleteInput} from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/action/euro-symbol';
export const ReceiptItemIcon = Icon;

const ReceiptItemFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Product" source="product" reference="product" perPage={100} sort={{ field: 'name', order: 'ASC' }} alwaysOn>
            <AutocompleteInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Receipt" source="receipt" reference="receipt" perPage={100}>
            <SelectInput optionText="id" />
        </ReferenceInput>
    </Filter>
);

export const ReceiptItemList = (props) => (
    <List {...props} title="Receipt Items List" sort={{ field: 'id', order: 'DESC' }} filters={<ReceiptItemFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Receipt" source="receipt" reference="receipt">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="Product" source="product" reference="product">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="price" />
            <EditButton />
        </Datagrid>
    </List>
);

const ReceiptItemTitle = ({ record }) => {
    return <span>Receipt Item {record ? `#${record.id}` : ''}</span>;
};

export const ReceiptItemEdit = (props) => (
    <Edit title={<ReceiptItemTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Product" source="product" reference="product">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DisabledInput source="price" />
        </SimpleForm>
    </Edit>
);

export const ReceiptItemCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Product" source="product" reference="product" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DisabledInput source="price" />
        </SimpleForm>
    </Create>
);