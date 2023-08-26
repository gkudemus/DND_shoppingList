import React, { useState } from "react";
import SortableList from "../components/sortableList";
import {
  Paper,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import { styled } from "@mui/system";
import { ArrowBack } from "@mui/icons-material";
import Page from "../components/page";

const StyledContainer = styled("div")({
  margin: "auto",
  width: "1000px",
});

const AddShoppingListPage = () => {
  const [items, setItems] = useState([
    { id: "1", name: "item 1", quantity: null },
    { id: "2", name: "item 2", quantity: null },
    { id: "3", name: "item 3", quantity: null },
  ]);

  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  const addItem = () => {
    const newItem = {
      id: `${items.length + 1}`,
      name: null,
      quantity: null,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const saveList = () => {
    if (!listName || !listType) {
      alert("List Name and Type are required.");
      return;
    }

    if (items.some((item) => !item.name || !item.quantity)) {
      alert("Please fill in all item names and quantities.");
      return;
    }

    setIsModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Page>
      <Typography style={{ fontSize: "30px", paddingBottom: "20px" }}>
        My Shopping List
      </Typography>
      <StyledContainer>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <TextField
                label="List Name"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                style={{ width: "280px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Select
                  label="List Type"
                  value={listType}
                  onChange={(e) => setListType(e.target.value)}
                  style={{ width: "280px" }}
                >
                  <MenuItem value="Grocery">Grocery</MenuItem>
                  <MenuItem value="Home Goods">Home Goods</MenuItem>
                  <MenuItem value="Hardware">Hardware</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={addItem}
                className="button-add"
                style={{ width: "100%" }}
              >
                Add New Item
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <SortableList
          moveItem={moveItem}
          removeItem={removeItem}
          items={items}
          setItems={setItems}
        />
        <Paper style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              style={{
                textAlign: "right",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={saveList}
                style={{ marginRight: "5px" }}
              >
                Save List
              </Button>
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Dialog open={isModalOpen} onClose={closeSuccessModal}>
          <DialogTitle>Shopping List Saved!</DialogTitle>
          <DialogContent style={{ width: "500px" }}>
            <h1>SUMMARY</h1>
            <h3>List Name: {listName}</h3>
            <h3>List Type: {listType}</h3>
            <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item) => (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeSuccessModal}>
              <ArrowBack />
              Back
            </Button>
          </DialogActions>
        </Dialog>
      </StyledContainer>
    </Page>
  );
};

export default AddShoppingListPage;
