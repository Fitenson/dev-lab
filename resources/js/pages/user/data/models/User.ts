import BaseEntity from "@/core/domain/entity/BaseEntity";
import { UserModel } from "@/pages/user/presentation/schema/userSchema";


export default class User extends BaseEntity<UserModel> implements UserModel {
    public id!: string;
    public name!: string;
    public full_name!: string;
    public email!: string;
    public description!: string;
    public address!: string;
    public gender!: string;
    public created_at!: string;
    public created_by!: string;
    public updated_at!: string;
    public updated_by!: string;


    constructor(data: Partial<User>) {
        super();
        Object.assign(this, data);
    }


    setId(id: string): void
    {
        this.id = id;
    }

    setName(name: string): void
    {
        this.name = name;
    }

    setFullName(full_name: string): void
    {
        this.full_name = full_name;
    }

    setEmail(email: string): void
    {
        this.email = email;
    }

    setDescription(description: string): void
    {
        this.description = description;
    }

    setAddress(address: string): void
    {
        this.address = address;
    }

    setGender(gender: string): void
    {
        this.gender = gender;
    }

    getId(): string
    {
        return !isEmpty(this.id) ? this.id : "";
    }

    getName(): string
    {
        return !isEmpty(this.name) ? this.name : "";
    }

    getFullName(): string
    {
        return !isEmpty(this.full_name) ? this.full_name : "";
    }

    getEmail(): string
    {
        return !isEmpty(this.email) ? this.email : "";
    }

    getDescription(): string
    {
        return !isEmpty(this.description) ? this.description : "";
    }

    getAddress(): string
    {
        return !isEmpty(this.address) ? this.address : "";
    }

    getGender(): string
    {
        return !isEmpty(this.gender) ? this.gender : "";
    }
}
