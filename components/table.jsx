'use client'
import React, { useContext, useMemo } from 'react';
import { HolderOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { Button, Table } from 'antd';

const RowContext = React.createContext({});

const DragHandle = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{
        cursor: 'move',
      }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};

const columns = [
  {
    key: 'sort',
    align: 'center',
    width: 80,
    render: () => <DragHandle />,
  },

  {
    title: 'Name',
    dataIndex: 'name',
  },

  {
    title: 'Age',
    dataIndex: 'age',
  },

  {
    title: 'Address',
    dataIndex: 'address',
  },

  {
    title: 'Birthday',
    dataIndex: 'birthday',
  },

  {
    title: 'Month Of Birth',
    dataIndex: 'monthOfBirth',
  },

  {
    title: 'Year Of Birth',
    dataIndex: 'yearOfBirth',
  },

  {
    title: 'Amount In Bank',
    dataIndex: 'amountInBank',
  },

  {
    title: 'Height',
    dataIndex: 'height',
  },

  {
    title: 'Weight',
    dataIndex: 'weight',
  },

  {
    title: 'Comment',
    dataIndex: 'comment',
  },
];


const initialData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '2',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '3',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '4',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '5',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '6',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '7',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '8',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '9',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '10',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '11',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '12',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '13',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '14',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '15',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '16',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '17',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '18',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '19',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  {
    key: '20',
    name: 'John Brown',
    age: 32,
    address: 'Long text Long',
    birthday: '12',
    monthOfBirth: '12',
    yearOfBirth: '1986',
    amountInBank: '100000',
    height: '188',
    weight: '88',
    comment: 'go',
  },
  
];

const Row = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
        }
      : {}),
  };

  const contextValue = useMemo(
    () => ({
      setActivatorNodeRef,
      listeners,
    }),
    [setActivatorNodeRef, listeners],
  );
  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  );
};
const TableData = () => {
  const [dataSource, setDataSource] = React.useState(initialData);

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex((record) => record.key === active?.id);
        const overIndex = prevState.findIndex((record) => record.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext items={dataSource.map((i) => i.key)} strategy={verticalListSortingStrategy}>
        <Table
          rowKey="key"
          components={{
            body: {
              row: Row,
            },
          }}
          columns={columns}
          dataSource={dataSource}
          pagination={{
          pageSize: "10",
        }}
        />
      </SortableContext>
    </DndContext>
  );
};

export default TableData;