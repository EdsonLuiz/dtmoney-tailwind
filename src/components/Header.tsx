import { Button } from './dry/Button';
import { Container } from './structural/Container';
import { Flex } from './structural/Flex';

export function Header() {
  return (
    <header className="h-56 bg-dtblue-700">
      <Container className="px-8 pt-8">
        <Flex>
          <img src="/logo.svg" alt="dt money" className="h-8 sm:h-10" />
          <Button>Nova transação</Button>
        </Flex>
      </Container>
    </header>
  );
}
