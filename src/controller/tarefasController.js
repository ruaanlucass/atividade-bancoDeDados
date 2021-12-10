const tarefas = require('../models/tarefas');

const getAll = (req, res) => {
    console.log(req.url);
    tarefas.find(function(err, tarefas){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(tarefas);
    })
};

const postTarefa = (req, res) => {

    let tarefa = new tarefas(req.body)

    tarefa.save(function(err){
        if(err){
            res.status(500).send({ message: err.message })
        }
        res.status(201).send(tarefa.toJSON())
    })
};

const getById = (req, res) => {
    const id = req.params.id;

    tarefas.find({ id }, function(err, tarefas){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(tarefas);
    })
};

const deleteTarefa = (req,res) => {
    const id = req.params.id;

    tarefas.find({id}, function(err, tarefa){
        if(tarefa.length > 0){
            tarefas.deleteMany({id}, function(err){
                if(err) {
                    res.status(500).send({
                        message: err.message,
                        status: "FAIL"
                    })
                }
                res.status(200).send({
                    message: 'Tarefa removida com sucesso',
                    status: "SUCCESS"
                })
            })
        }else{
            res.status(200).send({
                message: 'Não há tarefa para ser removida',
                status: "EMPTY"
            })
        }
    })
};

const deleteTarefaConcluida = (req, res) => {
    try{
        tarefas.deleteMany({ concluido: true }, function (err) {
            if (!err) {
                res.status(200).send({ message : 'Tarefas concluidas removidas com sucesso', status: "SUCCESS" })
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(424).send({ message: err.message })
    }
}

const putTarefa = (req, res) => {
    const id = req.params.id;
  
    tarefas.find({ id }, function(err, tarefa){
      if(tarefa.length> 0){
        
        
        tarefas.updateMany({ id }, { $set : req.body }, function (err) {
          if (err) {
            res.status(500).send({ message: err.message })
          }
          res.status(200).send({ message: "Registro alterado com sucesso"})
        })
      }else {
        res.status(200).send({ message: "Não há registros para serem atualizados com esse id"})
      }
    })
  
  }


module.exports = {
    getAll,
    postTarefa,
    getById,
    deleteTarefa,
    deleteTarefaConcluida,
    putTarefa
};
