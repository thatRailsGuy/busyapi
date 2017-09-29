module.exports = function(app){
    app.post('/api/usages', function(req, res){

    	var Usage = app.mongoose.model('Usage', app.usageSchema);

    	usage = new Usage(req.body)

        res.status(201).json({'id':usage._id});
    });
}
