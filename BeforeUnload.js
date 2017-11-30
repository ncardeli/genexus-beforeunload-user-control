function BeforeUnload() {
	this.handler = (function(e) {
		if (this.ExecuteEnter && this.ParentObject.hasEnterEvent)
			this.ParentObject.executeServerEvent("ENTER", true);

		if (this.ShowMessage) {
			if (e)
				e.returnValue  = this.Message;
			return this.Message;
		}
	}).closure(this);

	this.show = function() {
		if (!this.IsPostBack)
			gx.evt.attach(window, "beforeunload", this.handler);
	};
	
	this.destroy = function() {
		gx.evt.detach(window, "beforeunload", this.handler);
	};
	
	// Methods
	this.SetMessage = function(msg) {
		this.Message = msg;
	};

	this.EnableMessage = function() {
		this.ShowMessage = true;
	};
	
	this.DisableMessage = function() {
		this.ShowMessage = false;
	};

	this.EnableEnter = function() {
		this.ExecuteEnter = true;
	};
	
	this.DisableEnter = function() {
		this.ExecuteEnter = false;
	};
}