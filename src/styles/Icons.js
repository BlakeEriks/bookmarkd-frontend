import { Check, Edit, Plus, Search, Times } from "@styled-icons/fa-solid";
import styled from "styled-components";
import { colors } from "./Config";

export const SearchIcon = styled(Search)`
    color: ${colors.light};
    width: 32px;
    height: 32px;
    transition: color 0.3s ease-in-out;
`

export const PlusIcon = styled(Plus)`
    color: ${colors.light};
    width: 32px;
    height: 32px;
    transition: color 0.3s ease-in-out;
`

export const CheckIcon = styled(Check)`
    color: ${colors.light};
    width: 32px;
    height: 32px;
    transition: color 0.3s ease-in-out;
`

export const TimesIcon = styled(Times)`
    color: ${colors.light};
    width: 20px;
    height: 20px;
    transition: color 0.3s ease-in-out;
`

export const EditIcon = styled(Edit)`
    color: ${colors.light};
    width: 20px;
    height: 20px;
    transition: color 0.3s ease-in-out;
`