#Milk Tea Shop Inventory and Ordering System

A full-stack web application for managing milk tea orders, inventory, and deliveries — built with **Laravel** (backend), **React** (frontend), and **MySQL** (database). This system allows customers to place milk tea orders and admins to manage inventory, orders, 
and deliveries.

## Features

### Customer Side
- View and search available milk tea items with images and prices
- The user should be login/Authorized to perform functionality below
- Add items to cart
- Place orders with delivery address
- Cash-only payment (no online payment gateway)
- View order history and status


### Admin Side
- Login to admin dashboard
- Add, update, or remove milk tea items
- View current orders and update statuses (e.g., "Preparing", "Out for Delivery", "Delivered")
- Admin has a Desicion if the order will accept or declined..also admin can decline the order defends on the user address
- View Users and has a access to delete account of specific user..I add this cause I want to remove the users that playing with the sytem like fake address and fake order
- View order history

---

## Tech Stack

| Technology | Description |
|-----------|-------------|
| **Laravel** | Backend API and admin logic |
| **React.js** | Frontend user interface |
| **MySQL** | Relational database |
| **Tailwind CSS** | Responsive UI styling |
| **React Router** | Page navigation |
| **Axios** | HTTP communication between frontend and backend |
