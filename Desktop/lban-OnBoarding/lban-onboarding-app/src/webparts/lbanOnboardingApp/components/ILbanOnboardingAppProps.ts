import { WebPartContext } from "@microsoft/sp-webpart-base";  
import { PageContext } from '@microsoft/sp-page-context';
export interface ILbanOnboardingAppProps {
  description: string;
    context:WebPartContext;
  pageContext: PageContext;
}
