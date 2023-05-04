class HelloController {
    async index(req,res){
        res.json({hello: 'world'})
    }
}
export default new HelloController();