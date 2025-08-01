import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

const tournamentSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  teamLimit: z.number().optional(),
});

// Create tournament
router.post('/', async (req, res) => {
  try {
    const data = tournamentSchema.parse(req.body);
    const tournament = await prisma.tournament.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        startDate: data.startDate ? new Date(data.startDate) : null,
        endDate: data.endDate ? new Date(data.endDate) : null,
        teamLimit: data.teamLimit ?? null,
      },
    });
    res.status(201).json(tournament);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err });
  }
});

// List tournaments
router.get('/', async (req, res) => {
  const archived = req.query.archived === 'true';
  const tournaments = await prisma.tournament.findMany({
    where: archived ? { archived: true } : {},
  });
  res.json(tournaments);
});

// Get tournament by id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const tournament = await prisma.tournament.findUnique({ where: { id } });
  if (!tournament) return res.status(404).json({ error: 'Not found' });
  res.json(tournament);
});

// Update tournament
router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const data = tournamentSchema.partial().parse(req.body);
    const tournament = await prisma.tournament.update({
      where: { id },
      data: {
        name: data.name ?? undefined,
        description: data.description ?? undefined,
        startDate: data.startDate ? new Date(data.startDate) : undefined,
        endDate: data.endDate ? new Date(data.endDate) : undefined,
        teamLimit: data.teamLimit ?? undefined,
      },
    });
    res.json(tournament);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err });
  }
});

// Archive tournament
router.patch('/:id/archive', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const tournament = await prisma.tournament.update({
      where: { id },
      data: { archived: true },
    });
    res.json(tournament);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err });
  }
});

export default router;
