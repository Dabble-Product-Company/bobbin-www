import {
	Accordion as BaseAccordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
	data: {
		title: string;
		description: string;
	}[];
}

export function Accordion({ data }: Props) {
	return (
		<BaseAccordion type="single" collapsible className="w-full">
			{data.map((item, i) => {
				return (
					<AccordionItem value={`item-${i.toFixed()}`}>
						<AccordionTrigger>
							<h4>{item.title}</h4>
						</AccordionTrigger>
						<AccordionContent>
							<p>{item.description}</p>
						</AccordionContent>
					</AccordionItem>
				);
			})}
		</BaseAccordion>
	);
}
