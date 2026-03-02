const db = require("../config/db");

// GET all agents
exports.getAgents = (req, res) => {
  db.query("SELECT * FROM agents ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// CREATE agent
exports.createAgent = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  db.query(
    "INSERT INTO agents (name, email, phone) VALUES (?, ?, ?)",
    [name, email, phone],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      res.status(201).json({
        message: "Agent created successfully",
        id: result.insertId,
      });
    }
  );
};

// UPDATE agent
exports.updateAgent = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  db.query(
    "UPDATE agents SET name = ?, email = ?, phone = ? WHERE id = ?",
    [name, email, phone, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Agent not found" });
      }

      res.status(200).json({ message: "Agent updated successfully" });
    }
  );
};

// DELETE agent
exports.deleteAgent = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM agents WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Agent not found" });
    }

    res.status(200).json({ message: "Agent deleted successfully" });
  });
};