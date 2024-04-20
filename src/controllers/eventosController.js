import Evento from '../models/evento.js';

class EventosController {
  static listarEvento = async (req, res) => {
    try {
      const resultado = await Evento.pegarEventos();
      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}

export default EventosController;
