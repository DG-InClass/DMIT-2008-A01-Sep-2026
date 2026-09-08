import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

// TODO: Import the component to be tested

// TODO: Write tests
//          - Feb 2026 - 28 divs (1-28)
//          - Mar 2026 - 35 divs (1-31 + 4)
/*
    <Calendar month={ new Date("Feb 2026")} />

    <section>
        <div><span>1</span></div>
        <div><span>2</span></div>
        <div><span>3</span></div>
        <div><span>4</span></div>
        <div><span>5</span></div>
        <div><span>6</span></div>
        <div><span>7</span></div>
        <div><span>8</span></div>
        <div><span>9</span></div>
        <div><span>10</span></div>
        <div><span>11</span></div>
        <div><span>12</span></div>
        <div><span>13</span></div>
        <div><span>14</span></div>
        <div><span>15</span></div>
        <div><span>16</span></div>
        <div><span>17</span></div>
        <div><span>18</span></div>
        <div><span>19</span></div>
        <div><span>20</span></div>
        <div><span>21</span></div>
        <div><span>22</span></div>
        <div><span>23</span></div>
        <div><span>24</span></div>
        <div><span>25</span></div>
        <div><span>26</span></div>
        <div><span>27</span></div>
        <div><span>28</span></div>
    </section>

    <style>
        section {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 0;
            width: calc(75px * 7);
        }

        section > div {
            width: 75px;
            height: 75px;
            border: solid thin gainsboro;
        }

        section > div > span {
            font-weight: bold;
        }

        aside {
            float:right;
            margin-left: 2em;
            width: 400px;
        }
    </style>
*/
