
function showFormmCreationOptions() {
    section = '<div class="row">\
    <div class="col-md-4 form-group">\
        <input class="form-control" type="text" placeholder="Enter Form Name" required\
            name="name" id="name">\
    </div>\
    <div class="col-md-4 form-group">\
        <input class="form-control" type="number" min="1" step="1" id="NOF"\
            placeholder="Number of Fields">\
    </div>\
    <div class="col-md-2">\
        <div class="text-center"><button type="submit" id="create_form"\
                onclick="make_fields()">Add Fields</button></div>\
        <div class="row">\
        </div>\
    </div>\
</div>';

    document.getElementById("form-section").innerHTML = section;
}



function make_fields() {
    section = '<div class="row">\
    <div class="col-md-4 form-group">\
        <input class="form-control" type="text" placeholder="Enter Form Name" required\
            name="name" id="name">\
    </div>\
    <div class="col-md-4 form-group">\
        <input class="form-control" type="number" min="1" step="1" id="NOF"\
            placeholder="Number of Fields">\
    </div>\
    <div class="col-md-2">\
        <div class="text-center"><button type="submit" id="create_form"\
                onclick="make_fields()">Add Fields</button></div>\
        <div class="row">\
        </div>\
    </div>\
</div>'
    var n = document.getElementById("NOF").value;
    var i;
    if (n < 1) n = 1;
    if (n>15) n=15;
    for (i = 1; i <= n; i++) {
        section += '<div class="row">\
        <div class="col-md-4 form-group">   \
        <input type="text" class="form-control" placeholder="Enter Field Name" required\
        name="field_name' + i+'">\
        </div>';
        section += '<div class="col-md-4 form-group">\
            <select class="form-control" name="field_type' + i + '" id="form_type">\
                <option value="text">Text</option>\
                <option value="number">Number</option>\
            </select>\
        </div>\
    </div>'
    }
    section += '<div class="text-center"><button type="submit">Create Form</button></div>';
    document.getElementById("form-section").innerHTML = section;
}