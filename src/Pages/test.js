import React, { Component } from "react";
import "@emisgroup/ui-kit/build/dist/css/ui-kit.min.css";


class Confirmed extends Component {
  render() {
    return (
      <div class="eui-form-section">
        <label for="date-input" class="eui-form-section__label">
          Select date
        </label>
        <div class="eui-form-section__field">
          <div class="eui-date-picker">
            <input
              id="date-input"
              type="text"
              class="eui-text-input eui-text-input__icon"
            />
            <svg
              class="eui-icon eui-date-picker__icon"
              tabIndex="0"
              aria-labelledBy="calendar-icon"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title id="calendar-icon">Calendar</title>
              <use xlinkHref="/img/ui-kit/sprite.svg#calendar" />
            </svg>
            <div class="eui-calendar eui-date-picker__calendar">
              <div class="eui-calendar__header">
                <div class="eui-calendar__month">
                  <a href="#" class="eui-calendar__arrow">
                    &lt;
                  </a>
                  <span class="eui-calendar__title eui-calendar__title--month">
                    March
                  </span>
                  <a href="#" class="eui-calendar__arrow">
                    &gt;
                  </a>
                </div>
                <div class="eui-calendar__year">
                  <a href="#" class="eui-calendar__arrow">
                    &lt;
                  </a>
                  <span class="eui-calendar__title">2019</span>
                  <a href="#" class="eui-calendar__arrow">
                    &gt;
                  </a>
                </div>
              </div>
              <div class="eui-calendar__main">
                <div class="eui-calendar__days">
                  <span class="eui-calendar__day">Mon</span>
                  <span class="eui-calendar__day">Tue</span>
                  <span class="eui-calendar__day">Wed</span>
                  <span class="eui-calendar__day">Thu</span>
                  <span class="eui-calendar__day">Fri</span>
                  <span class="eui-calendar__day">Sat</span>
                  <span class="eui-calendar__day">Sun</span>
                </div>
                <div class="eui-calendar__dates">
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    25
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    26
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    27
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    28
                  </span>
                  <span class="eui-calendar__date">1</span>
                  <span class="eui-calendar__date">2</span>
                  <span class="eui-calendar__date">3</span>
                  <span class="eui-calendar__date">4</span>
                  <span class="eui-calendar__date">5</span>
                  <span class="eui-calendar__date">6</span>
                  <span class="eui-calendar__date">7</span>
                  <span class="eui-calendar__date">8</span>
                  <span class="eui-calendar__date">9</span>
                  <span class="eui-calendar__date">10</span>
                  <span class="eui-calendar__date">11</span>
                  <span class="eui-calendar__date">12</span>
                  <span class="eui-calendar__date">13</span>
                  <span class="eui-calendar__date eui-calendar__date--selected">
                    14
                  </span>
                  <span class="eui-calendar__date">15</span>
                  <span class="eui-calendar__date">16</span>
                  <span class="eui-calendar__date">17</span>
                  <span class="eui-calendar__date">18</span>
                  <span class="eui-calendar__date">19</span>
                  <span class="eui-calendar__date">20</span>
                  <span class="eui-calendar__date">21</span>
                  <span class="eui-calendar__date">22</span>
                  <span class="eui-calendar__date">23</span>
                  <span class="eui-calendar__date">24</span>
                  <span class="eui-calendar__date">25</span>
                  <span class="eui-calendar__date">26</span>
                  <span class="eui-calendar__date">27</span>
                  <span class="eui-calendar__date">28</span>
                  <span class="eui-calendar__date">29</span>
                  <span class="eui-calendar__date">30</span>
                  <span class="eui-calendar__date">31</span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    1
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    2
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    3
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    4
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    5
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    6
                  </span>
                  <span class="eui-calendar__date eui-calendar__date--inactive">
                    7
                  </span>
                </div>
              </div>
              <div class="eui-calendar__footer">
                <button class="eui-calendar__today">Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmed;
