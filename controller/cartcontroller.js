app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;
    const query = 'INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)';
    db.query(query, [productId, quantity], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

// Get all cart items
app.get('/cart', (req, res) => {
    const query = 'SELECT * FROM cart_items';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

// Update a cart item
app.put('/cart/:id', (req, res) => {
    const { quantity } = req.body;
    const query = 'UPDATE cart_items SET quantity = ? WHERE id = ?';
    db.query(query, [quantity, req.params.id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

// Delete a cart item
app.delete('/cart/:id', (req, res) => {
    const query = 'DELETE FROM cart_items WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).send(err);
       

 } else {
            res.send(result);
        }
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
