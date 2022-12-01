const express = require('express');
const { Router } = require('express');
const router = express.Router()
const Task = require('../models/Task')

router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find()
    tasks.map(e => {
        return (
            title = e.title,
            description = e.description,
            date_created = e.date_created,
            priority = e.priority
            )
        })
    res.json(tasks)
    } catch (error) {
        console.log(error)
    }
    
})

router.post('/', async(req, res) => {
    const { title, description, date_created, priority } = req.body
   try {
    const task = new Task({
        title, 
        description,
        date_created,
        priority
    })
    await task.save()
    res.status(200).json({
        status: task
    })
    } catch (error) {
    res.status(404).send(console.log(error))
    }
})

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).send(error, "Id no encontrado")
    }
})

router.put('/:id', async(req, res) => {
    try {
        // const {title, description, priority, date_create} = req.body
        const {id} = req.params
        // const newtask = { title, description, priority, date_create}
        const newtasks = await Task.findByIdAndUpdate(id, req.body);
        res.status(200).json(newtasks)
    } catch (error) {
        res.status(404).send(console.log(error))
    }

})

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params
        if(!id) res.send("id no existe")
        await Task.findByIdAndRemove(req.params.id);
        res.json({status: 'task delete'}) 
    } catch (error) {
        res.status(404).send(console.error(error))
    }
})



module.exports = router