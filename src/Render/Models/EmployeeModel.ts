export interface EmployeeModel {
    Name: string;
    Id: number | null
    DepartmentId: number | null;
}


//interface EmployeesModel extends Array<EmployeeModel>{}

type EmployeesModel = EmployeeModel[];

export default EmployeesModel;