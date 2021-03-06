const BaseGenerator = require('../lib/generatorbase');
const SERVICE_NAME = "service-db2";
const SCAFFOLDER_PROJECT_PROPERTY_NAME = "db2OnCloud";
const localDevConfig = ['dsn', 'ssljdbcurl'];


module.exports = class extends BaseGenerator {
	constructor(args, opts) {
		super(args, opts, SERVICE_NAME, SCAFFOLDER_PROJECT_PROPERTY_NAME, localDevConfig);
	}

	initializing(){
		return super.initializing();
	}

	configuring(){
		return super.configuring();
	}
	
	writing(){
		return super.writing();
	}
}
