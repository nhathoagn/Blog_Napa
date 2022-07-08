const RateRepo = require("../Repository/Rate.repository")
const {rate} = require("../helpers/error.messages");
const RateService = {}
RateService.create = (rate) => RateRepo.create(rate);
RateService.update = (id,rate) => RateRepo.update(id,rate)
RateService.getAll = () => RateRepo.getAll()
RateService.getbyID = (id) => RateRepo.getByID(id)
RateService.remove = (id) => RateRepo.romove(id)

module.exports = RateService
