const express = require('express');
const Job = require('../models/job');
const jsonschema = require('jsonschema');
const jobSearchSchema = require('../schemas/jobSearch.json');
const jobNewSchema = require('../schemas/jobNew.json');
const jobUpdateSchema = require('../schemas/jobUpdate.json');
const ExpressError = require('../helpers/expressError');
const { authenticateJWT, ensureAdmin } = require('../middleware/auth');

const router = express.Router();

// GET /jobs
// Returns a list of all jobs, filtered by the given search parameters if provided
router.get('/', authenticateJWT, async (req, res, next) => {
  try {
    const result = jsonschema.validate(req.query, jobSearchSchema);
    if (!result.valid) {
      throw new ExpressError(result.errors.map(e => e.stack), 400);
    }
    const jobs = await Job.getAll(req.query);
    return res.json({ jobs });
  } catch (err) {
    return next(err);
  }
});

// GET /jobs/:id
// Returns a single job with the given ID
router.get('/:id', authenticateJWT, async (req, res, next) => {
  try {
    const job = await Job.getOne(req.params.id);
    return res.json({ job });
  } catch (err) {
    return next(err);
  }
});

// POST /jobs
// Adds a new job to the database
router.post('/', ensureAdmin, async (req, res, next) => {
  try {
    const result = jsonschema.validate(req.body, jobNewSchema);
    if (!result.valid) {
      throw new ExpressError(result.errors.map(e => e.stack), 400);
    }
    const job = await Job.create(req.body);
    return res.status(201).json({ job });
  } catch (err) {
    return next(err);
  }
});

// PATCH /jobs/:id
// Updates a job with the given ID
router.patch('/:id', ensureAdmin, async (req, res, next) => {
  try {
    const result = jsonschema.validate(req.body, jobUpdateSchema);
    if (!result.valid) {
      throw new ExpressError(result.errors.map(e => e.stack), 400);
    }
    const job = await Job.update(req.params.id, req.body);
    return res.json({ job });
  } catch (err) {
    return next(err);
  }
});

// DELETE /jobs/:id
// Deletes a job with the given ID
router.delete('/:id', ensureAdmin, async (req, res, next) => {
  try {
    await Job.remove(req.params.id);
    return res.json({ message: 'Job deleted' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;