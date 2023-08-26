import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemType = "ITEM";

const SortableList = ({ moveItem, removeItem, items, setItems }) => {
  // Handle input changes for dynamically created items
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    setItems(updatedItems);
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <SortableItem
              key={item.id}
              index={index}
              id={item.id}
              itemName={item.name}
              quantity={item.quantity}
              moveItem={moveItem}
              removeItem={removeItem}
              handleFieldChange={handleItemChange}
            />
          ))}
          {!items ||
            (!items.length && (
              <TableRow sx={{ padding: 3 }}>
                <TableCell component="th" scope="row">
                  Nothing to show
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const SortableItem = ({
  id,
  index,
  itemName,
  quantity,
  moveItem,
  removeItem,
  handleFieldChange,
}) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <TableRow ref={(node) => ref(drop(node))} className="table-row">
      <TableCell>
        <IconButton
          color="inherit"
          aria-label="menu"
          style={{ paddingTop: "15px", paddingRight: "15px" }}
        >
          <MenuIcon />
        </IconButton>
        <TextField
          variant="outlined"
          name="Item Name"
          value={itemName}
          onChange={(e) => handleFieldChange(index, "name", e.target.value)}
          style={{ width: "400px" }}
        />
      </TableCell>
      <TableCell>
        <Select
          value={quantity}
          onChange={(e) => handleFieldChange(index, "quantity", e.target.value)}
          label="Quantity"
          name="Quantity"
          variant="outlined"
          style={{ width: "280px" }}
        >
          {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </TableCell>
      <TableCell>
        <IconButton
          color="secondary"
          aria-label="remove"
          onClick={() => removeItem(id)}
          className="circle-button"
        >
          <RemoveIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default SortableList;
