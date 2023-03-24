import {
  Flex,
  FlexProps,
  Group,
  MantineStyleSystemProps,
  Title
} from '@mantine/core'

interface HeaderProps extends MantineStyleSystemProps, FlexProps {
  title: string
  subtitle: string
  subHead?: boolean
}

export function Header(props: HeaderProps) {
  const { title, subtitle, subHead, ...others } = props

  return (
    <Flex {...others}>
      <div>
        <Title
          order={1}
          size={!subHead ? 30 : 20}
          color={!subHead ? 'gray.9' : 'blue.9'}
          weight={500}
        >
          {title}
        </Title>
        <Title order={!subHead ? 5 : 6} color="gray.5" weight={400}>
          {subtitle}
        </Title>
      </div>
      <Group>{props.children}</Group>
    </Flex>
  )
}

export default Header
