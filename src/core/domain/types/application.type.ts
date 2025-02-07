import { ApplicationType } from "../enums/application.enums";
import { ApplicationMetadata } from "../value-objects";

export interface ApplicationProps {
  id: number;
  name: string;
  logo: string;
  url: string;
  page: number;
  position: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  type: ApplicationType;
  metadata?: ApplicationMetadata;
}

export interface CreateApplicationProps extends ApplicationProps {}
export interface IApplicationCreatedDE extends Omit<ApplicationProps, "id"> {}
