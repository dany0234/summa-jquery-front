const apiClient = {
    baseURL: 'http://localhost:5000/api',

    fetchUsers: function() {
        return $.ajax({
            url: `${this.baseURL}/user`,
            method: 'GET',
            contentType: 'application/json'
        }).then(response => {
            return response.map(user => ({
                ...user,
                image: `data:image/jpeg;base64,${user.image}`
            })).sort((a, b) => b.id - a.id);
        }).fail(error => {
            console.error('Error fetching users:', error);
            throw error;  // Re-throw error for further handling if necessary
        });
    },

    createUser: function(formData) {
        return $.ajax({
            url: `${this.baseURL}/user`,
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false
        }).done(response => {
            console.log('User created successfully:', response);
            return response;
        }).fail(error => {
            console.error('Error creating user:', error);
            throw error;  // Re-throw error for further handling if necessary
        });
    }
};
