Assignment: Design a page with the functionality listed below, stylize the
elements/components based on the aesthetics/themes that you can interpret from the
screenshots of our application at www.revnue.com
Description: create a shopping list which allows users to add items, define the quantities, sort
(drag and drop) the items, and save the list.

Requirements:
1. Use React JS
2. Use any React library that allows you to drag and drop items.
For example: react-sortable-hoc library / REACT DND
3. Field validation on save:
1. List Name and Type are required
2. You cannot save the list if there are any rows with empty fields for Item Name
or Quantity

4. Type dropdown field options are: Grocery, Home Goods, and Hardware
5. Pressing "Add an item" creates a new row
6. Each row has the following:
● Text input field for the item name
● Dropdown field for quantity which has the numbers 1 to 12 as options
7. Each row can be deleted via the delete icon
8. Each row is sortable using the React JS library
9. Successful validation should show a popup modal saying "Shopping List Saved!"
    
preview:
![image](https://github.com/gkudemus/DND_shoppingList/assets/6787094/a3c5cb41-dcb7-41a0-91be-7dee1beb946f)

validation:

Missing List Name and Type fields
![image](https://github.com/gkudemus/DND_shoppingList/assets/6787094/f1c34baf-95be-43c3-b0e7-907faf19b0e1)


Missing Item name and quantity
![image](https://github.com/gkudemus/DND_shoppingList/assets/6787094/5cd50c3b-368e-4101-ab7d-9448a50ba22f)


confirmation:
![image](https://github.com/gkudemus/DND_shoppingList/assets/6787094/8dda4485-c3f5-449b-a17a-38a31a7cd36d)

