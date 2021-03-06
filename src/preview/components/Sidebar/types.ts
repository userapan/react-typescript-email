import { Template } from '../../../models/Template';

interface OwnProps {
  as?: 'div' | 'header' | 'section' | 'main';
  className?: string;
  templates: Template[];
}

export type Props = OwnProps;