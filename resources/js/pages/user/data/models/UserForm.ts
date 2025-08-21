class UserForm {
    private static instance: UserForm;

    private constructor() {}

    static getInstance(): UserForm
    {
        if(!this.instance) {
            this.instance = new this;
        }

        return this.instance;
    }


    getName(): "name"
    {
        return "name";
    }

    getFullName(): "full_name"
    {
        return "full_name";
    }

    getEmail(): "email"
    {
        return "email";
    }

    getDescription(): "description"
    {
        return "description";
    }

    getAddress(): "address"
    {
        return "address";
    }

    getGender(): "gender"
    {
        return "gender";
    }

    getCreatedAt(): "created_at"
    {
        return "created_at";
    }

    getCreatedBy(): "created_by"
    {
        return "created_by";
    }

    updatedAt(): "updated_at"
    {
        return "updated_at";
    }

    updatedBy(): "updated_by"
    {
        return "updated_by";
    }
}


export default UserForm.getInstance();
