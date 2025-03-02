'use client'
import React, { createContext, useContext, useState } from 'react';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { Table } from 'antd';
const DragIndexContext = createContext({
  active: -1,
  over: -1,
});
const dragActiveStyle = (dragState, id) => {
  const { active, over, direction } = dragState;

  let style = {};
  if (active && active === id) {
    style = {
      backgroundColor: 'gray',
      opacity: 0.5,
    };
  }

  else if (over && id === over && active !== over) {
    style =
      direction === 'right'
        ? {
            borderRight: '1px dashed gray',
          }
        : {
            borderLeft: '1px dashed gray',
          };
  }
  return style;
};
const TableBodyCell = (props) => {
  const dragState = useContext(DragIndexContext);
  return (
    <td
      {...props}
      style={{
        ...props.style,
        ...dragActiveStyle(dragState, props.id),
      }}
    />
  );
};
const TableHeaderCell = (props) => {
  const dragState = useContext(DragIndexContext);
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: props.id,
  });
  const style = {
    ...props.style,
    cursor: 'move',
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
          userSelect: 'none',
        }
      : {}),
    ...dragActiveStyle(dragState, props.id),
  };
  return <th {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};
const dataSource = [
  {
    'key': '1',
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
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '12',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '13',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '14',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '15',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '16',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '17',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '18',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '19',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  {
    key: '20',
    name: 'Hilda',
    age: 40,
    address: 'address',
    birthday: '30',
    monthOfBirth: '07',
    yearOfBirth: '2000',
    amountInBank: '555555',
    height: '160',
    weight: '50',
    comment: 'go it',
  },
  
];

const baseColumns = [


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

const DragColumnSorting = () => {
  const [dragIndex, setDragIndex] = useState({
    active: -1,
    over: -1,
  });
  const [columns, setColumns] = useState(() =>
    baseColumns.map((column, i) => ({
      ...column,
      key: `${i}`,
      onHeaderCell: () => ({
        id: `${i}`,
      }),
      onCell: () => ({
        id: `${i}`,
      }),
    })),
  );
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
        distance: 1,
      },
    }),
  );
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setColumns((prevState) => {
        const activeIndex = prevState.findIndex((i) => i.key === active?.id);
        const overIndex = prevState.findIndex((i) => i.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
    setDragIndex({
      active: -1,
      over: -1,
    });
  };
  const onDragOver = ({ active, over }) => {
    const activeIndex = columns.findIndex((i) => i.key === active.id);
    const overIndex = columns.findIndex((i) => i.key === over?.id);
    setDragIndex({
      active: active.id,
      over: over?.id,
      direction: overIndex > activeIndex ? 'right' : 'left',
    });
  };
  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      collisionDetection={closestCenter}
    >
      <SortableContext items={columns.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
        <DragIndexContext.Provider value={dragIndex}>
          <Table
            rowKey="key"
            columns={columns}
            dataSource={dataSource}
            pagination={{
              pageSize: "10"
            }}
            components={{
              header: {
                cell: TableHeaderCell,
              },
              body: {
                cell: TableBodyCell,
              },
            }}
          />
        </DragIndexContext.Provider>
      </SortableContext>
      <DragOverlay>
        <th
          style={{
            backgroundColor: 'gray',
            padding: 16,
          }}
        >
          {columns[columns.findIndex((i) => i.key === dragIndex.active)]?.title}
        </th>
      </DragOverlay>
    </DndContext>
  );
};
export default DragColumnSorting;